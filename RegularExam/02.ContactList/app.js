window.addEventListener("load", solve);

function solve() {
    const inputs = Array.from(document.querySelectorAll('input#name, input#phone, select#category'));
    const addBtn = document.getElementById("add-btn");
    const checkListElement = document.getElementById("check-list");
    const contactListElement = document.getElementById("contact-list");

    addBtn.addEventListener("click", handleAddNewEntry);

    function handleAddNewEntry(e) {
        e.preventDefault();
        addNewEntry();
    }
    function addNewEntry() {
        if (inputs.filter(i => i.value === "").length !== 0) {
            return;
        }

        const wrapper = createElement("li");
        const article = createElement("article", "", "", "", "", wrapper);
        createElement("p", `name:${inputs[0].value}`, "", "", "", article);
        createElement("p", `phone:${inputs[1].value}`, "", "", "", article);
        createElement("p", `category:${inputs[2].value}`, "", "", "", article);

        const buttonWrapper = createElement("div", "", ["buttons"], "", "", wrapper);
        const editBtn = createElement("button", "", ["edit-btn"], "", "", buttonWrapper);
        const saveBtn = createElement("button", "", ["save-btn"], "", "", buttonWrapper);

        editBtn.addEventListener("click", editEntry);
        saveBtn.addEventListener("click", saveEntry);

        checkListElement.appendChild(wrapper);
        inputs.forEach(i => {i.value = ""});
    }

    function editEntry(e) {
        const parent = e.target.parentNode.parentNode;
        parent.remove();
        const name = parent
            .children[0]
            .children[0]
            .textContent
            .split("name:")[1];
        const phoneNumber = parent
            .children[0]
            .children[1]
            .textContent
            .split("phone:")[1];
        const category = parent
            .children[0]
            .children[2]
            .textContent.split("category:")[1];

        inputs[0].value = name;
        inputs[1].value = phoneNumber;
        inputs[2].value = category;
    }

    function saveEntry(e) {
        const parent = e.target.parentNode.parentNode;
        parent.remove();
        parent.children[1].remove();

        const deleteBtn = createElement("button", "", ["del-btn"], "", "", parent);
        deleteBtn.addEventListener("click", deleteEntry)

        contactListElement.appendChild(parent);
    }

    function deleteEntry(e) {
        const parent = e.target.parentNode.parentNode;
        parent.remove();
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
  }
  