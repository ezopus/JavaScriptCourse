document.querySelector("#load-vacations").addEventListener("click", loadVacations)

const addVacationBtn = document.querySelector("#add-vacation");
addVacationBtn.addEventListener("click", addVacation)
const formElement = document.querySelector("#form form");
const editVacationBtn = document.querySelector("#edit-vacation");
const formInputs = Array.from(document.querySelectorAll("#form form input"));

function clearInputFields() {
    formInputs.forEach(i => i.value = "");
}

let vacations;

async function loadVacations() {
    const response = await fetch("http://localhost:3030/jsonstore/tasks/");
    vacations = await response.json();
    const vacationList = document.querySelector("#list");
    vacationList.innerHTML = "";
    console.log(vacations)
    Object.values(vacations).forEach(v => {
        vacationList.appendChild(getVacation(v))
    })
}

async function addVacation(e) {
    e.preventDefault();
    const name = formInputs[0].value;
    const days = formInputs[1].value;
    const date = formInputs[2].value;

    const newEntry = {name, days, date}
    await fetch("http://localhost:3030/jsonstore/tasks/", {
        method: "POST",
        body: JSON.stringify(newEntry),
    })
    clearInputFields();
    await loadVacations();
}

function getVacation(vacation) {
    const wrapper = createElement("div", "", "container");
    wrapper.id = vacation._id;

    const person = createElement("h2", `${vacation.name}`);
    const date = createElement("h3", `${vacation.date}`)
    const days = createElement("h3", `${vacation.days}`)
    const changeBtn = createElement("button", "Change", "change-btn");
    const doneBtn = createElement("button", "Done", "done-btn");

    changeBtn.addEventListener("click", () => {
        addVacationBtn.disabled = true;
        editVacationBtn.disabled = false;
        formElement.dataset.vacation = vacation._id;

        formInputs[0].value = vacation.name;
        formInputs[1].value = vacation.days;
        formInputs[2].value = vacation.date;
    });
    doneBtn.addEventListener("click", deleteVacation);

    wrapper.appendChild(person)
    wrapper.appendChild(date)
    wrapper.appendChild(days)
    wrapper.appendChild(changeBtn)
    wrapper.appendChild(doneBtn)

    return wrapper;
}
async function submitEdit(e) {
    addVacationBtn.disabled = false;
    editVacationBtn.disabled = true;
    const editVacationId = e.target.getAttribute("data-id");

    await fetch(`http://localhost:3030/jsonstore/tasks/${editVacationId}`,
        {
            method: "PUT",
            body: JSON.stringify({
                name: formInputs[0].value,
                days: formInputs[1].value,
                date: formInputs[2].value,
                _id: editVacationId,
            }),
        })
    await loadVacations();
    clearInputFields();
}

function createElement(type, text, classLabel) {
    const el = document.createElement(`${type}`);
    el.textContent = text;
    if (Array.isArray(classLabel)) {
        classLabel.forEach(cl => {
            el.classList.add(`${cl}`)
        })
    } else {
        el.classList.add(`${classLabel}`);
    }
    return el;
}

editVacationBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const vacationId = formElement.getAttribute("data-vacation");

    fetch(`http://localhost:3030/jsonstore/tasks/${vacationId}`,
        {
            method: "PUT",
            body: JSON.stringify({
                name: formInputs[0].value,
                days: formInputs[1].value,
                date: formInputs[2].value,
                _id: vacationId,
            }),
        })
        .then(loadVacations)
        .then(clearInputFields)

    addVacationBtn.disabled = false;
    editVacationBtn.disabled = true;
})

async function deleteVacation(e) {
    const deleteVacationId = e.target.parentNode.getAttribute("id");
    await fetch(`http://localhost:3030/jsonstore/tasks/${deleteVacationId}`, {
        method: "DELETE"
    })
    await loadVacations();
}