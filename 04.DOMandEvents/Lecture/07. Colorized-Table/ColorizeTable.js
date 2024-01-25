function colorize() {
  const colors = Array.from(document.querySelectorAll("tr:nth-of-type(even)"));

  colors.forEach((row) => {
    row.style.background = "teal";
  });
}
