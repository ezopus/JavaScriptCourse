function sumTable() {
  const elements = Array.from(document.querySelectorAll("td:nth-child(even):not(#sum)"));

  console.log(elements);
  const sum = elements
    .map((el) => Number(el.textContent))
    .reduce((acc, curr) => {
      acc += curr;
      return acc;
    }, 0);

  document.getElementById("sum").textContent = sum;
}
