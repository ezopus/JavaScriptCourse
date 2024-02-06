function attachGradientEvents() {
    const gradient = document.querySelector("#gradient");
    const resultBox = document.querySelector("#result");

    gradient.addEventListener("click", getClickPosition);
    function getClickPosition(e) {
        const xPosition = e.offsetX;
        resultBox.textContent = `${Math.floor(xPosition/gradient.offsetWidth * 100)}%`;
    }
}