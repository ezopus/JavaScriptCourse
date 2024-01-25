function focused() {
  const fields = Array.from(document.getElementsByTagName("input"));

  fields.forEach((input) => {
    input.addEventListener("focus", (field) => {
      field.target.parentElement.classList.add("focused");
    });
    input.addEventListener("blur", (field) => {
      field.target.parentElement.classList.remove("focused");
    });
  });

  console.log(fields);
}
