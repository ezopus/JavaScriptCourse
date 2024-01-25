function addItem() {
  const value = document.getElementById("newItemText").value;

  const newElement = document.createElement("li");
  newElement.textContent = value;

  document.getElementById("items").appendChild(newElement);
}
