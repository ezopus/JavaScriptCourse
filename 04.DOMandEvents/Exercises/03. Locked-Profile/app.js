function lockedProfile() {
    const buttons = Array.from(document.querySelectorAll(".profile button"));

    buttons.forEach(b => {
        b.addEventListener("click", toggleInfo)
    })

    function toggleInfo(e) {
        const lock = e.target.parentNode.querySelector("input:nth-of-type(1)");
        const hiddenInfo = e.target.parentNode.querySelector("div");

        let isLocked = lock["checked"] === true;

        if (!isLocked) {
            hiddenInfo.style.display === ""
                ? hiddenInfo.style.display = "block"
                : hiddenInfo.style.display = "";
            e.target.textContent === "Show more"
                ? e.target.textContent = "Hide it"
                : e.target.textContent = "Show more";
        }

    }
}