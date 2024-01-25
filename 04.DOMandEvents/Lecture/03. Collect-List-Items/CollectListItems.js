function extractText() {
  const text = Array.from(document.getElementsByTagName("li"));

  const result = text.map((row) => row.textContent).join("\n");

  const output = document.getElementById("result");
  output.textContent = result;
}
