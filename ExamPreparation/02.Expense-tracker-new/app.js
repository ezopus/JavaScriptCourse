window.addEventListener("load", solve);

function solve() {
    const inputs = Array.from(document.querySelectorAll(".expense-content input"));

    const addBtn = document.getElementById("add-btn")
    addBtn.addEventListener("click", addExpenseToPreviewList);

    const deleteBtn = document.querySelector("#expenses button");
    deleteBtn.addEventListener("click", reloadApp)

    const previewList = document.getElementById("preview-list")
    const expensesList = document.getElementById("expenses-list")
    function addExpenseToPreviewList() {
        if (inputs.filter(i => i.value === "").length !== 0) {
            return;
        }

        const listElement = createElement("li", "", ["expense-item"]);
        const article = createElement("article", "", "", "",  listElement);
        createElement("p", `Type: ${inputs[0].value}`, "", "",  article)
        createElement("p", `Amount: ${inputs[1].value}$`, "", "",  article);
        createElement("p", `Date: ${inputs[2].value}`, "", "", article);

        const buttonList = createElement("div", "", ["buttons"], "", listElement);
        const editBtn = createElement("button", "edit", ["btn", "edit"], "", buttonList);
        const okBtn = createElement("button", "ok", ["btn", "ok"], "", buttonList);

        previewList.appendChild(listElement);

        editBtn.addEventListener("click", editExpense);
        okBtn.addEventListener("click", submitEvent);

        addBtn.disabled = true;
        inputs.forEach(i => i.value = "");
    }

    function editExpense(e) {
        const parent = e.target.parentNode.parentNode;
        parent.remove();
        const type = parent
            .children[0]
            .children[0]
            .textContent
            .split("Type: ")[1];
        const amount = parent
            .children[0]
            .children[1]
            .textContent
            .split("Amount: ")[1]
            .split("$")[0];
        const date = parent
            .children[0]
            .children[2]
            .textContent.split("Date: ")[1];

        inputs[0].value = type;
        inputs[1].value = amount;
        inputs[2].value = date;

        addBtn.disabled = false;
    }

    function submitEvent(e) {
        const parent = e.target.parentNode.parentNode;

        parent.remove();
        parent.children[1].remove();

        expensesList.appendChild(parent);

        addBtn.disabled = false;
    }

    function reloadApp() {
        //e.currentTarget.parentNode.children[1].innerHTML = "";
        location.reload();
    }

    function createElement(type, textContent, classes, id, parent) {
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

        return el;
    }
}