const API_URL = "http://localhost:3030/jsonstore/tasks";
const listElement = document.getElementById("list");


const addCourseBtn = document.getElementById("add-course");
addCourseBtn.addEventListener("click", addCourse)

const editCourseBtn = document.getElementById("edit-course");

const loadCoursesBtn = document.getElementById("load-course")
loadCoursesBtn.addEventListener("click", loadCourses)

let courses = {};
const inputs = Array.from(document.querySelectorAll("#form form input, #form form textarea"));

async function loadCourses() {
    listElement.innerHTML = "";
    const res = await fetch(API_URL);
    const body = await res.json();
    Object.values(body).forEach(course => {
        courses[course._id] = {
            title: course.title,
            type: course.type,
            description: course.description,
            teacher: course.teacher,
            _id: course._id,
        }
        const courseWrapper = createElement("div", "", "container", `${course._id}`);
        createElement("h2", `${course.title}`, "", "", courseWrapper);
        createElement("h3", `${course.teacher}`, "", "", courseWrapper);
        createElement("h3", `${course.type}`, "", "", courseWrapper);
        createElement("h4", `${course.description}`, "", "", courseWrapper);
        const editBtn = createElement("button", "Edit Course", "edit-btn", "", courseWrapper)
        const finishBtn = createElement("button", "Finish Course", "finish-btn", "", courseWrapper)

        listElement.appendChild(courseWrapper)

        editBtn.addEventListener("click", loadCourseToEdit)

        finishBtn.addEventListener("click", () => {
            const deleteId = courseWrapper.id;
            courseWrapper.remove();
            fetch(`${API_URL}/${deleteId}`, {
                method: 'DELETE',
            });

            loadCourses();
        })
    })
}

async function loadCourseToEdit(e) {
    e.preventDefault();
    const courseWrapper = e.target.parentNode;
    const id = courseWrapper.id;
    courseWrapper.remove();
    inputs[0].value = courseWrapper.children[0].textContent;
    inputs[1].value = courseWrapper.children[2].textContent;
    inputs[2].value = courseWrapper.children[3].textContent;
    inputs[3].value = courseWrapper.children[1].textContent;

    addCourseBtn.disabled = true;
    editCourseBtn.disabled = false;
    editCourseBtn.setAttribute("data-id", id);
}

editCourseBtn.addEventListener("click", (editClickEvent) => {
    editClickEvent.preventDefault()
    const title = inputs[0].value;
    const type = inputs[1].value;
    const description = inputs[2].value;
    const teacher = inputs[3].value;
    const id = editClickEvent.target.getAttribute("data-id");

    fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        body: JSON.stringify({title, type, description, teacher, _id: id})
    }).then();

    loadCourses().then();
    inputs.forEach(i => i.value = "");
    addCourseBtn.disabled = false;
    editCourseBtn.disabled = true;
    editCourseBtn.removeAttribute("data-id");
});

async function addCourse(e) {
    const title = inputs[0].value;
    const type = inputs[1].value;
    const description = inputs[2].value;
    const teacher = inputs[3].value;
    await fetch(API_URL, {
        method: 'POST',
        body: JSON.stringify({title, type, description, teacher})
    })

    await loadCourses();
    inputs.forEach(i => i.value = "");
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