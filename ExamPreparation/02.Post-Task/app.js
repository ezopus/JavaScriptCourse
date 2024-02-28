window.addEventListener("load", solve);

function solve() {
    const reviewListElement = document.getElementById("review-list")
    const uploadedTasksElement = document.getElementById("published-list")

    const taskTitle = document.getElementById("task-title")
    const taskCategory = document.getElementById("task-category")
    const taskContent = document.getElementById("task-content")

    const publishBtn = document.getElementById("publish-btn");
    publishBtn.addEventListener("click", addNewTask);

    function addNewTask() {
        if (taskTitle.value === "" || taskCategory.value === "" || taskContent.value === "") {
            return;
        }

        const postWrapper = createElement("li", "", "rpost", reviewListElement);
        const articleWrapper = createElement("article", "", "", postWrapper)
        const postTItle = createElement("h4", `${taskTitle.value}`, "", articleWrapper)
        const postCategory = createElement("p", `Category: ${taskCategory.value}`, "", articleWrapper)
        const postContent = createElement("p", `Content: ${taskContent.value}`, "", articleWrapper)

        const editBtn = createElement("button", "Edit", ["action-btn", "edit"], postWrapper);
        const postBtn = createElement("button", "Post", ["action-btn", "post"], postWrapper);

        editBtn.addEventListener("click", () => {
            postWrapper.remove();
            taskTitle.value = postTItle.textContent;
            taskCategory.value = postCategory.textContent.split("Category: ")[1];
            taskContent.value = postContent.textContent.split("Content: ")[1];
        })
        postBtn.addEventListener("click", () => {
            postWrapper.remove();
            postWrapper.removeChild(editBtn)
            postWrapper.removeChild(postBtn)
            uploadedTasksElement.appendChild(postWrapper);
        })

        taskTitle.value = "";
        taskCategory.value = "";
        taskContent.value = "";
    }
    function createElement(type, text, classLabel, parent) {
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
        if (parent) {
            parent.appendChild(el);
        }
        return el;
    }

}