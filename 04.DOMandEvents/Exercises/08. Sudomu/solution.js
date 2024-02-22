function solve() {
    document.querySelector("button:first-of-type").addEventListener("click", checkField)

    document.querySelector("button:nth-of-type(2)").addEventListener("click", clearField)

    const outputElement = document.querySelector("#check p")
    const table = document.querySelector("table");

    function checkField() {
        let isSolved = false;

        const inputs = Array.from(document.querySelectorAll("td input"));
        const [one, two, three] = Array.from(document.querySelectorAll("tbody tr:first-of-type td input"));
        const [four, five, six] = Array.from(document.querySelectorAll("tbody tr:nth-of-type(2) td input"));
        const [seven, eight, nine] = Array.from(document.querySelectorAll("tbody tr:last-of-type td input"))

        const filledFields = inputs.map(i => i.value).filter(f => f !== "");

        const correctNumbers = filledFields.join("").match(/[^1-3]/g);

        if (filledFields < 9
            || correctNumbers !== null
            || !checkLine(one.value, two.value, three.value)
            || !checkLine(four.value, five.value, six.value)
            || !checkLine(seven.value, eight.value, nine.value)
            || !checkLine(one.value, four.value, seven.value)
            || !checkLine(two.value, five.value, eight.value)
            || !checkLine(three.value, six.value, nine.value)) {
            isSolved = false;
        } else {
            isSolved = true;
        }
        quickCheck(isSolved);
    }

    function checkLine(one, two, three) {
        return one !== two && one !== three && two !== three
    }

    function quickCheck(isSolved) {
        if (isSolved) {
            outputElement.textContent = "You solve it! Congratulations!";
            outputElement.style.color = "green";
            table.style.border = "2px solid green";
        } else {
            outputElement.textContent = "NOP! You are not done yet...";
            outputElement.style.color = "red";
            table.style.border = "2px solid red";
        }
    }

    function clearField() {
        const fields = Array.from(document.querySelectorAll("tbody tr td input"))
        fields.forEach(field => {
            field.value = "";
        })
        outputElement.innerHTML = "";
        table.style.border = "none";
    }
}