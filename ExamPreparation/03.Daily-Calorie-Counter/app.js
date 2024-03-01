const API_URL = "http://localhost:3030/jsonstore/tasks/";
const listMealsElement = document.getElementById("list");

const loadBtn = document.getElementById("load-meals");
loadBtn.addEventListener("click", loadMeals)
const inputs = Array.from(document.querySelector("#form form"));

const addNewMealBtn = document.getElementById("add-meal");
addNewMealBtn.addEventListener("click", addMeal);

const editMealBtn = document.getElementById("edit-meal");
editMealBtn.addEventListener("click", submitEditedMeal)

let meals = {};

async function loadMeals() {
    listMealsElement.innerHTML = "";
    const res = await fetch(API_URL);
    const body = await res.json();

    Object.values(body).forEach(meal => {
        meals[meal._id] = {
            food: meal.food,
            time: meal.time,
            calories: meal.calories,
            _id: meal._id,
        }

        const mealWrapper = createElement("div", "", "meal", meal._id, listMealsElement)
        createElement("h2", `${meal.food}`, "", "", mealWrapper)
        createElement("h3", `${meal.time}`, "", "", mealWrapper)
        createElement("h3", `${meal.calories}`, "", "", mealWrapper)
        const buttonWrapper = createElement("div", "", "", "meal-buttons", mealWrapper)
        const changeBtn = createElement("button", "Change", "change-meal", "", buttonWrapper)
        const deleteBtn = createElement("button", "Delete", "delete-meal", "", buttonWrapper)

        changeBtn.addEventListener("click", changeMeal)
        deleteBtn.addEventListener("click", deleteMeal)
    })
}

function addMeal(e) {
    e.preventDefault();
    const food = inputs[0].value;
    const time = inputs[1].value;
    const calories = inputs[2].value;


    fetch(API_URL, {
        method: 'POST',
        body: JSON.stringify({food, time, calories}),
    })
        .then(loadMeals);
    inputs.forEach(i => i.value = "");
}

function changeMeal(e) {
    const meal = e.target.parentNode.parentNode;
    meal.remove();
    editMealBtn.setAttribute("data-id", meal.id);
    editMealBtn.disabled = false;
    addNewMealBtn.disabled = true;

    inputs[0].value = meal.children[0].textContent;
    inputs[1].value = meal.children[1].textContent;
    inputs[2].value = meal.children[2].textContent;
}

async function submitEditedMeal(e) {
    e.preventDefault();
    const mealId = e.target.getAttribute("data-id");

    await fetch(`http://localhost:3030/jsonstore/tasks/${mealId}`, {
        method: 'PUT',
        body: JSON.stringify({
            food: inputs[0].value,
            time: inputs[1].value,
            calories: inputs[2].value,
            _id: mealId,
        })
    });
    await loadMeals();


    editMealBtn.removeAttribute("data-id");
    editMealBtn.disabled = true;
    addNewMealBtn.disabled = false;
    inputs.forEach(i => i.value = "");
}

async function deleteMeal(e) {
    const mealId = e.target.parentNode.parentNode.id;
    console.log(mealId);
    await fetch(`http://localhost:3030/jsonstore/tasks/${mealId}`, {
        method: 'DELETE',
    });
    await loadMeals();
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
