function solve() {
   const addButtons = Array.from(document.querySelectorAll("button.add-product"));
   const checkoutButton = document.querySelector("button.checkout");
    const resultArea = document.querySelector("textarea");

   const cart = {};
   const output = [];

    addButtons.forEach(button => {
        button.addEventListener("click", addProduct);
    })

    checkoutButton.addEventListener("click", checkout);
    function addProduct(e) {
        const currentProduct = e.target.parentNode.parentNode;
        const name = currentProduct.querySelector(".product-title").textContent;
        const price = Number(currentProduct.querySelector(".product-line-price").textContent);

        if (!cart.hasOwnProperty(name)) {
            cart[name] = 0;
        }
        cart[name] += price;
        output.push(`Added ${name} for ${price.toFixed(2)} to the cart.\n`);
        resultArea.textContent = "";
        resultArea.textContent = output.join("");
    }

    function checkout(e) {
        const items = Object.keys(cart);
        const totalSum = Object.values(cart).reduce((acc, curr) => acc += curr);
        resultArea.textContent += `You bought ${items.join(", ")} for ${totalSum.toFixed(2)}.`
        addButtons.forEach(b => b.setAttribute("disabled", true));
        checkoutButton.setAttribute("disabled", true);
    }
}