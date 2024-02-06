function addItem() {
    const newItemText = document.querySelector("#newItemText");
    const newItemValue = document.querySelector("#newItemValue");

    const newOption = document.createElement("option");

    newOption.textContent = newItemText.value;
    newOption.value = newItemValue.value;

    document.querySelector("#menu").appendChild(newOption);
    newItemValue.value = "";
    newItemText.value = "";

}