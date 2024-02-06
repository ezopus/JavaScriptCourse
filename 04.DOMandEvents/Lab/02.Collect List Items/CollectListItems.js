function extractText() {
    const listItems = Array.from(document.getElementById("items").children);

    let text = [];
    for (let item of listItems) {
        text.push(item.textContent)
    }

    document.querySelector("#result").textContent = text.join("\n");
}