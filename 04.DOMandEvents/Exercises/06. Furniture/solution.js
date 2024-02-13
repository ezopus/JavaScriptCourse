function solve() {
    Array.from(document.querySelectorAll(".table input"))
        .forEach(input => input.removeAttribute("disabled"));

    document.querySelector("#exercise button:first-of-type").addEventListener("click", addRow)
    const tableBody = document.querySelector(".table tbody");

    function addRow() {
        const input = JSON.parse(document.querySelector("#exercise textarea:first-of-type").value);

        input.forEach(item => {
            tableBody.appendChild(createNextRow(item))
        });
    }

    document.querySelector("#exercise button:last-of-type").addEventListener("click", buyItems)

    function buyItems() {
        const rows = Array.from(document.querySelectorAll(".table tbody tr"))
            .filter(row => row.querySelector("td:last-of-type input").checked === true);
        const names = rows.map(row => row.querySelector("td:nth-of-type(2) p").textContent);
        let price = rows.map(row => row.querySelector("td:nth-of-type(3) p").textContent);
        let decFactors = rows.map(row => row.querySelector("td:nth-of-type(4) p").textContent);

        price = price.reduce((acc, curr) => {
            acc += Number(curr);
            return acc;
        }, 0);
        decFactors = decFactors.reduce((acc, curr) => {
            acc += Number(curr);
            return acc;
        }, 0) / names.length;

        const outputBox = document.querySelector("#exercise textarea:last-of-type");

        outputBox.textContent += `Bought furniture: ${names.join(", ")}\n`;
        outputBox.textContent += `Total price: ${price.toFixed(2)}\n`;
        outputBox.textContent += `Average decoration factor: ${Number(decFactors.toFixed(2))}`;
    }

    function createNextRow(input) {
        const tableRow = document.createElement("tr");
        const mappedInput = [
            {key: "img", element: "img"},
            {key: "name", element: "p"},
            {key: "price", element: "p"},
            {key: "decFactor", element: "p"},

        ]
        mappedInput.forEach(item => {
            const cell = document.createElement("td");
            const element = document.createElement(item.element)
            if (item.key === "img") {
                element.src = input[item.key];
            } else element.textContent = input[item.key];
            cell.appendChild(element);
            tableRow.appendChild(cell);
        })

        const markCell = document.createElement("td");
        const checkmarkCell = document.createElement("input");
        checkmarkCell.type = "checkbox";
        markCell.appendChild(checkmarkCell);

        tableRow.appendChild(markCell);
        return tableRow;
    }


}