function solve() {
    const text = document.querySelector("#input").value
        .split(".")
        .filter(w => w.length >= 1);

    const result = document.querySelector("#output");

    while (text.length > 0) {
        const paragraph = document.createElement("p");
        paragraph.textContent = text
            .splice(0, 3)
            .map(t => t.trim())
            .join(". ") + ".";
        result.appendChild(paragraph);
    }
}