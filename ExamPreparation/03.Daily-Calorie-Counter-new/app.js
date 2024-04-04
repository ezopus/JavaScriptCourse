const listMealsElement = document.getElementById("list");
const inputs = Array.from(document.querySelectorAll("#form form input"));

const loadMealsBtn = document.getElementById("load-meals");
const addMealBtn = document.getElementById("add-meal");
const editMealBtn = document.getElementById("edit-meal");

loadMealsBtn.addEventListener("click", loadMeals);
addMealBtn.addEventListener("click", handleAddMealClick)
async function loadMeals() {
    listMealsElement.innerHTML = "";
    const res = await fetch("http://localhost:3030/jsonstore/tasks/")
    const body = await res.json();
    console.log(body)

    Object.values(body).forEach(e => {
        const mealWrapper = createElement("div", "", ["meal"], `${e._id}`);
        createElement("h2", `${e.food}`, "", "", "", mealWrapper);
        createElement("h3", `${e.time}`, "", "", "", mealWrapper);
        createElement("h3", `${e.calories}`, "", "", "", mealWrapper)
        const btnWrapper = createElement("div", "", "", "meal-buttons", "", mealWrapper)
        const changeMealBtn = createElement("button", "Change", ["change-meal"], "", "", btnWrapper)
        const deleteMealBtn = createElement("button", "Delete", ["delete-meal"], "", "", btnWrapper)

        changeMealBtn.addEventListener("click", editMeal)
        deleteMealBtn.addEventListener("click", deleteMeal)

        listMealsElement.appendChild(mealWrapper)
    })
}

function handleAddMealClick(e) {
    e.preventDefault();
    addMeal();
}

function addMeal() {
    const newMeal = {
        food: inputs[0].value,
        time: inputs[1].value,
        calories: inputs[2].value
    }

    fetch("http://localhost:3030/jsonstore/tasks/",
        {
            method: "POST",
            body: JSON.stringify(newMeal),
        })
        .then(loadMeals);
    inputs.forEach(i => i.value = "");
}

async function editMeal(e) {
    addMealBtn.disabled = true;
    editMealBtn.disabled = false;

    const mealWrapper = e.target.parentNode.parentNode;
    mealWrapper.remove();
    editMealBtn.setAttribute("data-id", mealWrapper.id)

    inputs[0].value = mealWrapper.children[0].textContent;
    inputs[1].value = mealWrapper.children[1].textContent;
    inputs[2].value = mealWrapper.children[2].textContent;

    editMealBtn.addEventListener("click", submitEditedMeal)
}

function submitEditedMeal(e) {
    const idEditedMeal = e.currentTarget.getAttribute("data-id");
    fetch(`http://localhost:3030/jsonstore/tasks/${idEditedMeal}`, {
        method: "PUT",
        body: JSON.stringify({
            food: inputs[0].value,
            time: inputs[1].value,
            calories: inputs[2].value,
            _id: idEditedMeal,
        })
    }).then(loadMeals)

    e.target.removeAttribute("data-id");
    addMealBtn.disabled = false;
    editMealBtn.disabled = true;
}

function deleteMeal(e) {
    const mealWrapper = e.target.parentNode.parentNode;
    const idDeletedMeal = mealWrapper.id;
    mealWrapper.remove();

    fetch(`http://localhost:3030/jsonstore/tasks/${idDeletedMeal}`, {
        method: "DELETE"
    }).then(loadMeals);
}
function createElement(type, textContent, classes, id, src, parent) {
    const el = document.createElement(`${type}`);
    if (textContent) {
        el.textContent = textContent;
    }
    if (classes) {
        el.classList.add(...classes)
    }
    if (id) {
        el.id = id;
    }
    if (parent) {
        parent.appendChild(el);
    }
    if (src) {
        el.src = `${src}`;
    }
    return el;
}