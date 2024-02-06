function solve() {
    document.querySelector('#searchBtn').addEventListener('click', onClick);

    function onClick() {
        const rows = Array.from(document.querySelectorAll("tbody tr td"));
        const searchTerm = document.querySelector("#searchField");

        rows.forEach((row => {
            row.parentElement.classList.remove("select")
        }));

        rows.forEach(row => {
            if (row.textContent.includes(searchTerm.value)) {
                row.parentElement.classList.add("select");
            }
        });

        searchTerm.value = "";
    }
}