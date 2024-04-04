window.addEventListener("load", solve);

function solve() {
    const inputs = Array.from(document.querySelectorAll(".expense-content input"));
    const previewListElement = document.getElementById("preview-list");
    const expensesListElement = document.getElementById("expenses-list");
    const deleteAllExpensesBtn = document.querySelector("#expenses button");
    const addBtn = document.getElementById("add-btn");


    addBtn.addEventListener("click", addNewExpense);
    deleteAllExpensesBtn.addEventListener("click", reloadApp)

    function addNewExpense() {
        if (!inputs.map(i => i.value).length > 0) {
            return;
        }
        const expenseType = inputs[0].value;
        const expenseAmount = inputs[1].value;
        const expenseDate = inputs[2].value;
        const expenseWrapper = createElement("li", "", "expense-item");
        const articleWrapper = createElement("article", "", "", "", expenseWrapper);
        createElement("p", `Type: ${expenseType}`, "", "", articleWrapper)
        createElement("p", `Amount: ${expenseAmount}$`, "", "", articleWrapper)
        createElement("p", `Date: ${expenseDate}`, "", "", articleWrapper)
        const buttonWrapper = createElement("div", "", "buttons", "", expenseWrapper)

        const editBtn = createElement("button", "edit", ["btn", "edit"], "", buttonWrapper)
        const okBtn = createElement("button", "ok", ["btn", "ok"], "", buttonWrapper)

        editBtn.addEventListener("click", editPreviewExpense);

        okBtn.addEventListener("click", postExpense);

        previewListElement.appendChild(expenseWrapper)
        addBtn.disabled = true;
        inputs.forEach(i => i.value = "");
    }

    function editPreviewExpense(e) {
        const expenseWrapper = e.target.parentNode.parentNode;
        expenseWrapper.remove();
        inputs[0].value = expenseWrapper
            .children[0]
            .children[0]
            .textContent.split("Type: ")[1];
        inputs[1].value = expenseWrapper
            .children[0]
            .children[1]
            .textContent.split("Amount: ")[1]
            .split("$")[0];
        inputs[2].value = expenseWrapper
            .children[0]
            .children[2]
            .textContent.split("Date: ")[1];
        addBtn.disabled = false;
    }
    function postExpense(e) {
        addBtn.disabled = false;
        const expense = e.target.parentNode.parentNode;
        expense.remove();
        expense.children[1].remove();
        expensesListElement.appendChild(expense);
    }
    function reloadApp(e) {
        location.reload();
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

