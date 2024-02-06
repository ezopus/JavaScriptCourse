function colorize() {
    const rowsToColorize =Array.from( document.querySelectorAll("tr:nth-of-type(even)"));

    for (let i of rowsToColorize) {
        i.style.background = "teal";
    }
}