function toggle() {

    const button = document.querySelector("#accordion .button");
    const extraInfo = document.querySelector("#extra");

    if (button.textContent.toLowerCase() === "more") {
        button.textContent = "Less";
        extraInfo.style.display = "block";
    }
    else
    {
        button.textContent = "More";
        extraInfo.style.display = "none";
    }

}