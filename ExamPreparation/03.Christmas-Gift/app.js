const presentListElement = document.getElementById("gift-list");
const loadPresentsBtn = document.getElementById("load-presents");
loadPresentsBtn.addEventListener("click", loadPresents);

const addNewPresentBtn = document.getElementById("add-present")
addNewPresentBtn.addEventListener("click", addNewPresent)

const editPresentBtn = document.getElementById("edit-present")
const inputs = Array.from(document.querySelectorAll("#form form input"))

let presents = {};
function addNewPresent(e) {
    e.preventDefault();
    if (inputs.filter(i => i.value === "").length > 0) {
        return;
    }
    console.log(inputs)
    const presentName = inputs[0].value;
    const presentFor = inputs[1].value;
    const presentPrice = inputs[2].value;

    fetch("http://localhost:3030/jsonstore/gifts/", {
        method: 'POST',
        body: JSON.stringify({
            gift: presentName,
            for:presentFor,
            price:presentPrice,
        })
    })
        .then(loadPresents)
    inputs.forEach(i => i.value = "");
}

async function loadPresents() {
    presentListElement.innerHTML = "";
    const res = await fetch("http://localhost:3030/jsonstore/gifts/");
    const body = await res.json();
    Object.values(body).forEach(present => {
        presents[present._id] = {
            gift: present.gift,
            for: present.for,
            price: present.price,
            _id: present._id,
        }
        const giftWrapper = createElement("div", "", "gift-sock", `${present._id}`, presentListElement);
        const giftContent = createElement("div", "", "content", "", giftWrapper)
        createElement("p", `${present.gift}`, "", "", giftContent)
        createElement("p", `${present["for"]}`, "", "", giftContent);
        createElement("p", `${present.price}`, "", "", giftContent)
        const buttonWrapper = createElement("div", "", "buttons-container", "", giftWrapper)
        const changeBtn = createElement("button", "Change", "change-btn", "", buttonWrapper)
        const deleteBtn = createElement("button", "Delete", "delete-btn", "", buttonWrapper)

        changeBtn.addEventListener("click", changeGiftData)
        deleteBtn.addEventListener("click", deleteGift)
    })
}

function changeGiftData(e) {
    const presentWrapper = e.target.parentNode.parentNode;
    presentWrapper.remove();
    const presentToEdit = presents[presentWrapper.id];
    addNewPresentBtn.disabled = true;
    editPresentBtn.disabled = false;
    inputs[0].value = presentToEdit.gift;
    inputs[1].value = presentToEdit.for;
    inputs[2].value = presentToEdit.price;

    editPresentBtn.setAttribute("data-id", presentToEdit._id)
    editPresentBtn.addEventListener("click", submitEdit)
}

function submitEdit(e) {
    const presentId = e.target.getAttribute("data-id");
    const present = presents[presentId];
    fetch(`http://localhost:3030/jsonstore/gifts/${presentId}`, {
        method: 'PUT',
        body: JSON.stringify({
            gift: inputs[0].value,
            for: inputs[1].value,
            price: inputs[2].value,
            _id: present._id,
        })
    }).then(loadPresents)
    addNewPresentBtn.disabled = false;
    editPresentBtn.disabled = true;
    editPresentBtn.removeAttribute("data-id");
    inputs.forEach(i => i.value = "");
}

function deleteGift(e) {
    const presentId = e.target.parentNode.parentNode.id;
    fetch(`http://localhost:3030/jsonstore/gifts/${presentId}`, {
        method: 'DELETE',
    }).then(loadPresents)
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