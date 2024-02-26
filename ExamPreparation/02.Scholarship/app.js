window.addEventListener("load", solve)

function solve() {
    const nextButton = document.querySelector("#next-btn");
    nextButton.addEventListener("click", addNewStudent);

    const inputs = Array.from(document.querySelectorAll(".applyContent input"));

    function addNewStudent() {
        if (inputs.filter(i => i.value === "").length > 0) {
            return;
        }
        const name = inputs[0].value;
        const university = inputs[1].value;
        const score = inputs[2].value;

        document.querySelector("#preview-list").appendChild(createNewEntry(name, university, score));
        inputs.forEach(i => i.value = "");
    }

    function createNewEntry(name, university, score) {
        const applicationWrapper = createElement("li", "", "application");

        const article = document.createElement("article");
        const title = createElement("h4", name)
        const universityElement = createElement("p", `University: ${university}`)
        const scoreElement = createElement("p", `Score: ${score}`)
        const editButton = createElement("button", "edit", ["action-btn", "edit"])
        const applyButton = createElement("button", "apply", ["action-btn", "apply"]);

        editButton.addEventListener("click", editEntry)
        applyButton.addEventListener("click", applyEntry)

        article.appendChild(title);
        article.appendChild(universityElement);
        article.appendChild(scoreElement);

        applicationWrapper.appendChild(article)
        applicationWrapper.appendChild(editButton)
        applicationWrapper.appendChild(applyButton)

        nextButton.disabled = true;
        return applicationWrapper;
    }

    function editEntry(e) {
        const entry = e.target.parentNode;
        entry.remove();

        inputs[0].value = entry.firstChild.childNodes[0].textContent;
        inputs[1].value = entry.firstChild.childNodes[1].textContent.split("University: ")[1];
        inputs[2].value = Number(entry.firstChild.childNodes[2].textContent.split("Score: ")[1]);
        nextButton.disabled = false;
    }

    function applyEntry(e) {
        const entry = e.target.parentNode;
        entry.remove();
        document.querySelector("#candidates-list").appendChild(entry);
        entry.lastChild.remove();
        entry.lastChild.remove();
        nextButton.disabled = false;
    }

    function createElement(type, text, classLabel) {
        const el = document.createElement(`${type}`);
        el.textContent = text;
        if (Array.isArray(classLabel)) {
            classLabel.forEach(cl => {
                console.log(cl);
                el.classList.add(`${cl}`)
            })
        } else {
            el.classList.add(`${classLabel}`);
        }
        return el;
    }
}
  