const gameListElement = document.getElementById("games-list");

const loadGamesBtn = document.getElementById('load-games');
const addNewGameBtn = document.getElementById("add-game");
const editGameBtn = document.getElementById("edit-game");
const inputs = Array.from(document.querySelectorAll("#form form input"))

loadGamesBtn.addEventListener("click", loadGames);
addNewGameBtn.addEventListener("click", handleAddNewGame);

function handleAddNewGame(e) {
    e.preventDefault();
    addNewGame();
}

function addNewGame() {
    const newGame = {
        name: inputs[0].value,
        type: inputs[1].value,
        players: inputs[2].value
    }
    fetch("http://localhost:3030/jsonstore/games/", {
        method: "POST",
        body: JSON.stringify(newGame),
    }).then(loadGames);

    inputs.forEach(i => i.value = "");
}
async function loadGames() {
    gameListElement.innerHTML = "";
    const res = await fetch("http://localhost:3030/jsonstore/games/")
    const body = await res.json();

    Object.values(body).forEach(e => {
        const gameWrapper = createElement("div", "", ["board-game"], `${e._id}`);
        const gameInfo = createElement("div", "", ["content"], "", "", gameWrapper);
        createElement("p", `${e.name}`, "", "", "", gameInfo);
        createElement("p", `${e.players}`, "", "", "", gameInfo);
        createElement("p", `${e.type}`, "", "", "", gameInfo);

        const buttonWrapper = createElement("div", "", ["buttons-container"], "", "", gameWrapper);
        const changeBtn = createElement("button", "Change", ["change-btn"], "", "", buttonWrapper);
        const deleteBtn = createElement("button", "Delete", ["delete-btn"], "", "", buttonWrapper);

        changeBtn.addEventListener("click", editGame)
        deleteBtn.addEventListener("click", deleteGame)

        gameListElement.appendChild(gameWrapper)
    })
}

function editGame(e) {
    editGameBtn.disabled = false;
    addNewGameBtn.disabled = true;

    const gameWrapper = e.target.parentNode.parentNode;
    const gameId = gameWrapper.id;
    const gameName = gameWrapper.children[0].children[0].textContent;
    const gameType = gameWrapper.children[0].children[2].textContent;
    const gamePlayers = gameWrapper.children[0].children[1].textContent;

    inputs[0].value = gameName;
    inputs[1].value = gameType;
    inputs[2].value = gamePlayers;

    editGameBtn.setAttribute("data-id", gameId);
    editGameBtn.addEventListener("click", submitChangesToGame)
}

function submitChangesToGame(e) {
    e.preventDefault();
    const gameId = e.target.getAttribute("data-id");
    fetch(`http://localhost:3030/jsonstore/games/${gameId}`, {
        method: "PUT",
        body: JSON.stringify({
            name: inputs[0].value,
            type: inputs[1].value,
            players: inputs[2].value,
            _id: gameId,
        })
    }).then(loadGames);

    editGameBtn.removeAttribute("data-id");
    editGameBtn.disabled = true;
    addNewGameBtn.disabled = false;
    inputs.forEach(i => i.value = "");
}

function deleteGame(e) {
    const gameId = e.target.parentNode.parentNode.id;
    fetch(`http://localhost:3030/jsonstore/games/${gameId}`, {
        method: "DELETE"
    }).then(loadGames);
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