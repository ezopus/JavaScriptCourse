window.addEventListener('load', solve);

function solve() {
    const inputs = Array.from(document.querySelectorAll("form input"));
    const addBtn = document.getElementById("add-btn");
    addBtn.addEventListener("click", addNewSong)

    const songCollectionList = document.querySelector("div.all-hits-container");
    const savedHitsList = document.querySelector("div.saved-container");
    const totalLikesElement = document.querySelector("div.likes p")

    function addNewSong(e) {
        e.preventDefault();
        if (inputs.filter(i => i.value === "").length > 0) {
            return;
        }
        const songWrapper = createElement("div", "", "hits-info", "", songCollectionList)
        createElement("img", "", "", "", songWrapper, "./static/img/img.png")
        createElement("h2", `Genre: ${inputs[0].value}`, "", "", songWrapper)
        createElement("h2", `Name: ${inputs[1].value}`, "", "", songWrapper)
        createElement("h2", `Author: ${inputs[2].value}`, "", "", songWrapper)
        createElement("h3", `Date: ${inputs[3].value}`, "", "", songWrapper)
        const saveBtn = createElement("button", "Save song", "save-btn", "", songWrapper)
        const likeBtn = createElement("button", "Like song", "like-btn", "", songWrapper)
        const deleteBtn = createElement("button", "Delete", "delete-btn", "", songWrapper)

        saveBtn.addEventListener("click", saveSong)
        likeBtn.addEventListener("click", likeSong)
        deleteBtn.addEventListener("click", deleteSong)

        inputs.forEach(i => i.value = "")
    }

    function saveSong(e) {
        const song = e.target.parentNode;
        song.remove();
        Array.from(song.querySelectorAll("button:not(button:last-of-type)")).forEach(b => b.remove());
        savedHitsList.appendChild(song);
    }
    function likeSong(e) {
        const likes = totalLikesElement.textContent.split(" ")[2];
        totalLikesElement.textContent = `Total Likes: ${Number(likes) + 1}`;
        e.target.disabled = true;
    }
    function  deleteSong(e) {
        const song = e.target.parentNode;
        song.remove();
    }
    function createElement(type, text, classLabel, id, parent, src) {
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
        if (src) {
            el.src = src;
        }
        return el;
    }
}