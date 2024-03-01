const loadBtn = document.querySelector("#load-product");
loadBtn.addEventListener("click", handleLoadProducts);

const inputs = Array.from(document.querySelectorAll("form.list input"));

const addProductBtn = document.querySelector("#add-product");
addProductBtn.addEventListener("click", addNewProduct);

const updateProductBtn = document.querySelector("#update-product");

const products = {};

const groceryListElement = document.getElementById("tbody");

async function loadProducts() {
  groceryListElement.innerHTML = "";
  const res = await fetch("http://localhost:3030/jsonstore/grocery/");
  const body = await res.json();

  Object.values(body).forEach((e) => {
    products[e._id] = {
      ...e,
    };

    const productWrapper = createElement("tr", "", "", `${e._id}`, groceryListElement);
    createElement("td", `${e.product}`, "name", "", productWrapper);
    createElement("td", `${e.count}`, "count-product", "", productWrapper);
    createElement("td", `${e.price}`, "price-product", "", productWrapper);
    const buttonWrapper = createElement("td", "", "btn", "", productWrapper);
    const updateBtn = createElement("button", "Update", "update", "", buttonWrapper);
    const deleteBtn = createElement("button", "Delete", "delete", "", buttonWrapper);

    updateBtn.addEventListener("click", updateProduct);
    deleteBtn.addEventListener("click", deleteProduct);

    inputs.forEach((i) => (i.value = ""));
  });
}

function updateProduct(e) {
  const productId = e.target.parentNode.parentNode.id;

  inputs[0].value = products[productId].product;
  inputs[1].value = products[productId].count;
  inputs[2].value = products[productId].price;

  addProductBtn.disabled = true;
  updateProductBtn.disabled = false;

  updateProductBtn.setAttribute("data-id", productId);
  updateProductBtn.addEventListener("click", submitProductEdit);
}

function submitProductEdit() {
  const productId = updateProductBtn.getAttribute("data-id");
  fetch(`http://localhost:3030/jsonstore/grocery/${productId}`, {
    method: "PATCH",
    body: JSON.stringify({
      product: inputs[0].value,
      count: inputs[1].value,
      price: inputs[2].value,
      _id: productId,
    }),
  }).then(loadProducts);

  addProductBtn.disabled = false;
  updateProductBtn.disabled = true;

  updateProductBtn.removeAttribute("data-id");
}

function deleteProduct(e) {
  const productId = e.target.parentNode.parentNode.id;
  fetch(`http://localhost:3030/jsonstore/grocery/${productId}`, {
    method: "DELETE",
  }).then(loadProducts);
}

function addNewProduct(e) {
  e.preventDefault();
  if (inputs.filter((i) => i.value === "").length > 0) {
    return;
  }

  const product = inputs[0].value;
  const count = inputs[1].value;
  const price = inputs[2].value;

  fetch("http://localhost:3030/jsonstore/grocery/", {
    method: "POST",
    body: JSON.stringify({ product, count, price }),
  }).then(loadProducts);
}

function handleLoadProducts(e) {
  e.preventDefault();
  loadProducts();
}

function createElement(type, text, classLabel, id, parent) {
  const el = document.createElement(`${type}`);
  if (text) {
    el.textContent = text;
  }
  if (classLabel) {
    if (Array.isArray(classLabel)) {
      classLabel.forEach((cl) => {
        el.classList.add(`${cl}`);
      });
    } else {
      el.classList.add(`${classLabel}`);
    }
  }
  if (id) {
    el.id = id;
  }
  if (parent) {
    parent.appendChild(el);
  }
  return el;
}
