window.addEventListener("load", solve);

function solve() {
    const inputs = Array.from(document.querySelectorAll("#add-task input[type=text]"));
    const addBtn = document.getElementById("add-btn");
    addBtn.addEventListener("click", addNewTask);

    const previewListElement = document.getElementById("task-list");
    const doneListElement = document.getElementById("done-list");

    function addNewTask(e) {
        e.preventDefault();
        if (inputs.filter(i => i.value === "").length > 0) {
            return;
        }

        const taskWrapper = createElement("li", "", "clean-task", "", previewListElement)
        const article = createElement("article", "", "", "", taskWrapper)
        createElement("p", `Place:${inputs[0].value}`, "", "", article)
        createElement("p", `Action:${inputs[1].value}`, "", "", article)
        createElement("p", `Person:${inputs[2].value}`, "", "", article)
        const buttonWrapper = createElement("div", "", "buttons", "", taskWrapper)
        const editBtn = createElement("button", "Edit", "edit", "", buttonWrapper)
        const doneBtn = createElement("button", "Done", "done", "", buttonWrapper)

        editBtn.addEventListener("click", editTask)

        doneBtn.addEventListener("click", completeTask)
        inputs.forEach(i => i.value = "");
    }

    function editTask(e) {
        const task = e.target.parentNode.parentNode;
        task.remove();
        inputs[0].value = task
            .children[0]
            .children[0]
            .textContent.split("Place:")[1];
        inputs[1].value = task
            .children[0]
            .children[1]
            .textContent.split("Action:")[1];
        inputs[2].value = task
            .children[0]
            .children[2]
            .textContent.split("Person:")[1];

    }
    function completeTask(e) {
        const task = e.target.parentNode.parentNode;
        task.remove();
        task.children[1].remove();
        const deleteBtn = createElement("button", "Delete", "delete", "", task);
        doneListElement.appendChild(task);
        deleteBtn.addEventListener("click", () => {
            task.remove();
        })
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
}


