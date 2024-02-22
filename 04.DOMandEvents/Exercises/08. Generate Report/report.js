function generateReport() {
    //old
    //const selectedCols = Array.from(document.querySelectorAll('input[type="checkbox"]')).filter(ch => ch.checked === true);

    const selectedCols = Array.from(document.querySelectorAll("input"));

    //old
    // const columns = {
    //     "employee": 1,
    //     "deparment": 2,
    //     "status": 3,
    //     "dateHired": 4,
    //     "benefits": 5,
    //     "salary": 6,
    //     "rating": 7,
    // }
    const rows = Array.from(document.querySelectorAll("tbody tr"));
    let result = [];

    //old solution had too specific selectors relating on input[name]
    // for (let i = 1; i <= rows.length; i++) {
    //     const oneEntry = {};
    //     for (let col of selectedCols) {
    //         const current = document.querySelector(`tbody tr:nth-child(${i}) td:nth-child(${columns[col.name]})`);
    //             oneEntry[col.name] = current.textContent;
    //     }
    //     result.push(oneEntry);
    // }

    rows.forEach(row => {
        const oneEntry = {};
        selectedCols.forEach((col, index) => {
            if (col.checked) {
                oneEntry[col.name] = Array.from(row.children)[index].textContent;
            }
        })
        result.push(oneEntry)
    })

    document.querySelector("#output").textContent = JSON.stringify(result, null, 2);
}
