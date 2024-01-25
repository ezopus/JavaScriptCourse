function addItem() {
  const value = document.getElementById("newItemText").value;

  const newElement = document.createElement("li");
  newElement.textContent = value;

  const deleteButton = document.createElement("a");
  deleteButton.href = "#";
  deleteButton.textContent = "[Delete]";

  deleteButton.addEventListener("click", (b) => {
    b.target.parentElement.remove();
  });

  newElement.appendChild(deleteButton);

  document.getElementById("items").appendChild(newElement);
}
