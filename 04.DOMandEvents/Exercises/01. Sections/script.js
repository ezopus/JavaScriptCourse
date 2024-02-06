function create(words) {
    const container = document.querySelector("#content");
    words.forEach(word => {
        const d = document.createElement("div");
        const p = document.createElement("p");
        p.textContent = word;
        p.style.display = "none";
        d.appendChild(p);
        container.appendChild(d);

        d.addEventListener("click", revealWords)
    })

    function revealWords(e) {
        const hiddenParagraph = e.currentTarget.querySelector("p");
        hiddenParagraph.style.display = "block";
    }
}