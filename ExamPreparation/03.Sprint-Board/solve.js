function attachEvents() {
    const loadBtn = document.getElementById("load-board-btn");
    loadBtn.addEventListener("click", loadBoard);
    const tasks = {};

    const board = Array.from(document.querySelectorAll("#board-section .task-list"))
    const taskTitleField = document.getElementById("title")
    const taskDescField = document.getElementById("description")
    document.getElementById("create-task-btn").addEventListener("click", addNewTask)

    async function loadBoard() {
        board.forEach(b => b.innerHTML = "");

        const res = await fetch("http://localhost:3030/jsonstore/tasks/")
        const body = await res.json();

        Object.values(body).forEach(task => {
            tasks[task._id] = task;
            const taskWrapper = createElement("li", "", "task");
            taskWrapper.id = task._id;

            const taskTitle = createElement("h3", `${task.title}`)
            const taskContent = createElement("p", `${task.description}`)
            const taskButton = createElement("button");
            taskButton.addEventListener("click", handleTaskStatusChange)

            taskWrapper.appendChild(taskTitle);
            taskWrapper.appendChild(taskContent);
            taskWrapper.appendChild(taskButton);

            switch (task.status) {
                case "ToDo":
                    taskButton.textContent = "Move to In Progress";
                    board[0].appendChild(taskWrapper);
                    break;
                case "In Progress":
                    taskButton.textContent = "Move to Code Review";
                    board[1].appendChild(taskWrapper);
                    break;
                case "Code Review":
                    taskButton.textContent = "Move to Done";
                    board[2].appendChild(taskWrapper);
                    break;
                case "Done":
                    taskButton.textContent = "Close";
                    board[3].appendChild(taskWrapper);
                    break;
            }
        })
    }

    async function addNewTask() {
        await fetch("http://localhost:3030/jsonstore/tasks/", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title: taskTitleField.value,
                description: taskDescField.value,
                status: 'ToDo',
            }),
        })

        taskTitleField.value = "";
        taskDescField.value = "";

        await loadBoard();
    }

    async function handleTaskStatusChange(e) {
        const currentTask = e.target.parentNode;
        console.log(currentTask)
        const taskStatus = e.target.textContent.split("Move to ").filter(e => e.length > 0)[0];
        console.log(taskStatus)
        let newStatus = "";
        switch (taskStatus) {
            case "In Progress":
                newStatus = "In Progress";
                break;
            case "Code Review":
                newStatus = "Code Review";
                break;
            case "Done":
                newStatus = "Done";
                break;
            case "Close":
                newStatus = "Delete";
                break;
        }

        if (newStatus !== "Delete") {
            await fetch(`http://localhost:3030/jsonstore/tasks/${currentTask.id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({status: `${newStatus}`}),
            });
        } else {
            await fetch(`http://localhost:3030/jsonstore/tasks/${currentTask.id}`, {
                method: 'DELETE',
            })
        }

        await loadBoard();
    }

    function createElement(type, textContent, classes) {
        const element = document.createElement(`${type}`);
        if (textContent) {
            element.textContent = textContent;
        }
        if (Array.isArray(classes)) {
            element.classList.add(...classes);
        } else if (classes) {
            element.classList.add(classes);
        }
        return element;
    }
}

attachEvents();