function generateReport() {
    const selectedCols = Array.from(document.querySelectorAll("thead tr th input")).filter(ch => ch.checked === true);

    const columns = {
        "employee": 1,
        "deparment": 2,
        "status": 3,
        "dateHired": 4,
        "benefits": 5,
        "salary": 6,
        "rating": 7,
    }

    const rows = Array.from(document.querySelectorAll("tbody tr"));

    let result = [];

    for (let i = 1; i <= rows.length; i++) {
        const oneEntry = {};
        for (let col of selectedCols) {
            const current = document.querySelector(`tbody tr:nth-child(${i}) td:nth-child(${columns[col.name]})`);

            oneEntry[col.name] = current.textContent;
        }
        result.push(oneEntry);
    }

    document.querySelector("#output").textContent =JSON.stringify(result, null, 2);
}