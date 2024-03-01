const loadBtn = document.getElementById("load-history")
loadBtn.addEventListener("click", loadRecords)
let records = {};

const inputs = Array.from(document.querySelectorAll("form input"));
const addWeatherBtn = document.getElementById("add-weather");
addWeatherBtn.addEventListener("click", addNewRecord)

const editWeatherBtn = document.getElementById("edit-weather");

const listElement = document.getElementById("list");

async function loadRecords() {
    listElement.innerHTML = "";
    const res = await fetch("http://localhost:3030/jsonstore/tasks/");
    const body = await res.json();
    Object.values(body).forEach(record => {
        records[record._id] = {
            location: record.location,
            temperature: record.temperature,
            date: record.date,
            _id: record._id,
        }

        const container = createElement("div", "", "container", `${record._id}`, listElement)
        createElement("h2", `${record.location}`, "", "", container)
        createElement("h3", `${record.date}`, "", "", container)
        createElement("h3", `${record.temperature}`, "", "celsius", container)
        const buttonContainer = createElement("div", "", "buttons-container", "", container)
        const changeBtn = createElement("button", "Change", "change-btn", "", buttonContainer)
        const deleteBtn = createElement("button", "Delete", "delete-btn", "", buttonContainer)

        changeBtn.addEventListener("click", changeRecord)
        deleteBtn.addEventListener("click", deleteRecord)
    })
}

function addNewRecord(e) {
    e.preventDefault();
    if (inputs.filter(i => i.value === "").length > 0) {
        return;
    }
    const location = inputs[0].value;
    const temperature = inputs[1].value;
    const date = inputs[2].value;

    fetch("http://localhost:3030/jsonstore/tasks/", {
        method: 'POST',
        body: JSON.stringify({
            location,
            temperature,
            date,
        })
    }).then(loadRecords);

    inputs.forEach(i => i.value = "");
}

function changeRecord(e) {
    const recordId = e.target.parentNode.parentNode.id;
    const recordToEdit = records[recordId];
    inputs[0].value = recordToEdit.location;
    inputs[1].value = recordToEdit.temperature;
    inputs[2].value = recordToEdit.date;

    addWeatherBtn.disabled = true;
    editWeatherBtn.disabled = false;
    editWeatherBtn.setAttribute("data-id", recordId);
    editWeatherBtn.addEventListener("click", submitEdit)
}

function submitEdit(e) {
    e.preventDefault();
    const editRecordId = e.target.getAttribute("data-id");

    fetch(`http://localhost:3030/jsonstore/tasks/${editRecordId}`, {
        method: 'PUT',
        body: JSON.stringify({
            location: inputs[0].value,
            temperature: inputs[1].value,
            date: inputs[2].value,
            _id: editRecordId,
        })
    }).then(loadRecords)

    addWeatherBtn.disabled = false;
    editWeatherBtn.disabled = true;
    editWeatherBtn.removeAttribute("data-id")
    inputs.forEach(i => i.value = "")
}

function deleteRecord(e) {
    const deleteRecordId = e.target.parentNode.parentNode.id;
    fetch(`http://localhost:3030/jsonstore/tasks/${deleteRecordId}`, {
        method: 'DELETE',
    }).then(loadRecords)
}

function createElement(type, text, classLabel, id, parent) {
    const el = document.createElement(`${type}`);
    if (text) {
        el.textContent = text;
    }
    if (classLabel) {
        if (Array.isArray(classLabel)) {
            classLabel.forEach(cl => {
                el.classList.add(`${cl}`)
            })
        } else {
            el.classList.add(`${classLabel}`);
        }
    }
    if (id) {
        el.id = id;
    }
    if (parent) {
        parent.appendChild(el);
    }
    return el;
}