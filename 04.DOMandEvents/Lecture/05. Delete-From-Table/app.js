function deleteByEmail() {
  const input = Array.from(document.querySelectorAll("td:nth-of-type(even)"));

  const userToDelete = document.getElementsByTagName("input")[0].value;
  const resultField = document.getElementById("result");

  input.forEach((user) => {
    if (user.textContent === userToDelete) {
      user.parentElement.remove();
      resultField.textContent = "Deleted.";
    } else {
      resultField.textContent = "Not found.";
    }
  });
  console.log(userToDelete);
}
