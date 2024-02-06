function subtract() {
    const fieldOne = document.querySelector("#firstNumber");
    const fieldTwo = document.querySelector("#secondNumber");

    // Array.from(document.querySelectorAll("input")).forEach(input => {
    //     // input.removeAttribute("disabled");
    //     input.addEventListener("keyup", result);
    // })

    const inputOne = Number(document.querySelector("#firstNumber").value);
    const inputTwo = Number(document.querySelector("#secondNumber").value);

    const result = inputOne - inputTwo;
    document.querySelector("#result").textContent = result;
}