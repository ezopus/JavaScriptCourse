function solve() {
    const binary = document.querySelector("#selectMenuTo option");
    const hexadecimal = document.createElement("option");

    binary.textContent = "Binary";
    binary.value = "binary";
    hexadecimal.textContent = "Hexadecimal";
    hexadecimal.value = "hexadecimal";

    document.querySelector("#selectMenuTo").appendChild(hexadecimal);

    const convertButton = document.querySelector("#container button");
    convertButton.addEventListener("click", convertNumber)

    function convertNumber() {
        let inputNumber = Number(document.querySelector("#input").value);
        const targetType = Array.from(document.querySelectorAll("#selectMenuTo option")).filter(op => op.selected === true)[0];
        let result;

        if (targetType.textContent === "Binary") {
            result = (inputNumber >>> 0).toString(2);
        } else if (targetType.textContent === "Hexadecimal") {
            result = inputNumber.toString(16).toUpperCase();
        }
        document.querySelector("#result").value = result.toString();
    }
}