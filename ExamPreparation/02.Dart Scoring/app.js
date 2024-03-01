window.addEventListener("load", solve);

function solve() {
    const inputs = Array.from(document.querySelectorAll("form.scoring-content input"))
    const checkScoreList = document.getElementById("sure-list");
    const scoreboard = document.getElementById("scoreboard-list");

    const addBtn = document.getElementById("add-btn")
    addBtn.addEventListener("click", addNewScore)

    const clearBtn = document.querySelector("button.clear")
    clearBtn.addEventListener("click", clearApp);
    function addNewScore(e) {
        e.preventDefault();
        if (inputs.filter(i => i.value === "").length > 0) {
            return;
        }
        const name = inputs[0].value;
        const score = inputs[1].value;
        const round = inputs[2].value;

        const scoreWrapper = createElement("li", "", "dart-item", "", checkScoreList)
        const article = createElement("article", "", "", "", scoreWrapper)
        createElement("p", `${name}`, "", "", article)
        createElement("p", `Score: ${score}`, "", "", article)
        createElement("p", `Round: ${round}`, "", "", article)
        const editBtn = createElement("button", "edit", ["btn", "edit"], "", scoreWrapper)
        const okBtn = createElement("button", "ok", ["btn", "ok"], "", scoreWrapper)

        addBtn.disabled = true;
        editBtn.addEventListener("click", editEntry)

        okBtn.addEventListener("click", postEntry)
        inputs.forEach(i => i.value = "");
    }

    function editEntry(e) {
        const entry = e.target.parentNode;
        entry.remove();
        inputs[0].value = entry
            .children[0]
            .children[0]
            .textContent;
        inputs[1].value = entry
            .children[0]
            .children[1]
            .textContent.split("Score: ")[1];
        inputs[2].value = entry
            .children[0]
            .children[2]
            .textContent.split("Round: ")[1];
            addBtn.disabled = false;
    }
    function postEntry(e) {
        const entry = e.target.parentNode;
        console.log(entry)
        entry.remove();
        entry.lastChild.remove();
        entry.lastChild.remove();
        scoreboard.appendChild(entry);
        addBtn.disabled = false;
    }

    function clearApp() {
        window.location.reload();
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
  