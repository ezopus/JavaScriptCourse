function validate() {
    const input = document.querySelector("#email");

    input.addEventListener("change", validateEmail);

    function validateEmail(e) {
        const validMatch = "[a-z]+[@][a-z]+[.][a-z]{2,}"
        if (!e.target.value.match(validMatch)) {
            e.target.classList.add("error");
        }
        else
        {
            e.target.classList.remove("error");
        }

    }
}