window.addEventListener('load', solve);

function solve() {
    const createTaskBtn = document.querySelector("#create-task-btn");
    const deleteTaskBtn = document.querySelector("#delete-task-btn");
    const taskSectionElement = document.querySelector("#tasks-section");
    const totalPointsElement = document.querySelector("#total-sprint-points");
    let totalPoints = 0;

    createTaskBtn.addEventListener("click", createNewTask)

    const formInputs = Array.from(document.querySelectorAll("div.form-control > :last-child"));
    formInputs.pop();
    formInputs.pop();
    const [title, description, label, points, assignee] = formInputs;
    const hiddenInput = document.querySelector("#task-id");
    let taskCounter = 1;

    function createNewTask() {
        if (formInputs.filter(i => i.value === "").length > 0) {
            return;
        }
        const article = document.createElement("article");
        article.classList.add("task-card");
        article.id = `task-${taskCounter}`;
        taskCounter++;

        const featureLabel = document.createElement("div")
        featureLabel.classList.add("task-card-label");

        if (label.value === "Feature") {
            featureLabel.textContent = "Feature ⊡"
            featureLabel.classList.add("feature")
        } else if (label.value === "Low Priority Bug") {
            featureLabel.textContent = "Low Priority Bug ☉"
            featureLabel.classList.add("low-priority")
        } else {
            featureLabel.textContent = "High Priority Bug ⚠"
            featureLabel.classList.add("high-priority")
        }

        const cardTitle = document.createElement("h3")
        cardTitle.textContent = title.value;
        cardTitle.classList.add("task-card-title");

        const cardDescription = document.createElement("p");
        cardDescription.textContent = description.value;
        cardDescription.classList.add("task-card-description");

        const cardPoints = document.createElement("div")
        cardPoints.textContent = `Estimated at ${points.value} pts`;
        cardPoints.classList.add("task-card-points");

        const cardAssignee = document.createElement("div")
        cardAssignee.textContent = `Assigned to: ${assignee.value}`;
        cardAssignee.classList.add("task-card-assignee");

        const actionWrapper = document.createElement("div")
        actionWrapper.classList.add("task-card-actions");

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";

        deleteBtn.addEventListener("click", (e) => {
            createTaskBtn.disabled = true;
            deleteTaskBtn.disabled = false;
            deleteTaskBtn.addEventListener("click", deleteTask)
            formInputs.forEach(i => i.disabled = true)
            title.value = cardTitle.textContent;
            description.value = cardDescription.textContent;

            let labelValue = e.target.parentNode.parentNode.children[0].textContent.split(" ");
            labelValue.pop();
            label.value = labelValue.join(" ");
            points.value = Number(cardPoints.textContent.split(" ")[2]);
            assignee.value = cardAssignee.textContent.split(": ")[1];

            hiddenInput.id = article.id;
        })

        actionWrapper.appendChild(deleteBtn);

        article.appendChild(featureLabel)
        article.appendChild(cardTitle)
        article.appendChild(cardDescription)
        article.appendChild(cardPoints)
        article.appendChild(cardAssignee)
        article.appendChild(actionWrapper)

        taskSectionElement.appendChild(article);

        totalPoints += Number(points.value);
        totalPointsElement.textContent = `Total Points ${totalPoints}pts`;

        formInputs.forEach(i => i.value = "");
    }

    function deleteTask() {
        createTaskBtn.disabled = false;
        deleteTaskBtn.disabled = true;
        const elementToRemove = document.querySelector(`#tasks-section article#${hiddenInput.id}`);
        totalPoints -= Number(elementToRemove.children[3].textContent.split(" ")[2]);
        totalPointsElement.textContent = `Total Points ${totalPoints}pts`;

        formInputs.forEach(i => {
            i.value = "";
            i.disabled = false
        });
        elementToRemove.remove();
    }
}