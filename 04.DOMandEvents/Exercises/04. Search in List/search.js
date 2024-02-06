function search() {
    const towns = Array.from(document.querySelector("#towns").children);
    const searchQuery = document.querySelector("#searchText");

    towns.forEach(el => {
        el.style.fontWeight = "";
        el.style.textDecoration = "";
    })
    let matches = 0;
    for (let t of towns) {
        const town = t.textContent;
        if (town.includes(searchQuery.value)) {
            t.style.fontWeight = "bold";
            t.style.textDecoration = "underline";
            matches++;
        }
    }
    searchQuery.value = "";
    document.querySelector("#result").textContent = `${matches} matches found`
}
