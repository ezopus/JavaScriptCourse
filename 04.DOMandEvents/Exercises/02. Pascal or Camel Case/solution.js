function solve() {
    const fieldOne = document.querySelector("#text").value;
    const fieldTwo = document.querySelector("#naming-convention").value;

    const result = document.querySelector("#result");

    if (fieldTwo === "Camel Case") {
        const camelCase = fieldOne.split(" ").reduce((acc, curr, index) => {
            if (index === 0) {
                curr = curr.toLowerCase();
            } else {
                curr = createPascalCaseWord(curr);
            }
            acc.push(curr);
            return acc;
        }, []).join("");
        result.textContent = camelCase;
    } else if (fieldTwo === "Pascal Case") {
        const pascalCase = fieldOne.split(" ").reduce((acc, curr) => {
            curr = createPascalCaseWord(curr);
            acc.push(curr);
            return acc;
        }, []).join("");
        result.textContent = pascalCase;
    } else result.textContent = "Error!";

    function createPascalCaseWord(str) {
        let pascalWord = str.toLowerCase().split("");
        pascalWord[0] = pascalWord[0].toUpperCase();
        return pascalWord.join("");
    }

}