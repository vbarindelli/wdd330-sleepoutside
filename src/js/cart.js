import { getLocalStorage, loadHeaderFooter } from "./utils.mjs";

loadHeaderFooter();


const cartItems = getLocalStorage("so-cart");
function renderCartContents() {
  const htmlItems = cartItems.map((item) => cartItemTemplate(item));
  document.querySelector(".product-list").innerHTML = htmlItems.join("");
}



function cartItemTemplate(item) {
  const newItem = `<li class="cart-card divider">
  <a href="#" class="cart-card__image">
    <img
      src="${item.Image}"
      alt="${item.Name}"
    />
  </a>
  <a href="#">
    <h2 class="card__name">${item.Name}</h2>
  </a>
  <p class="cart-card__color">${item.Colors[0].ColorName}</p>
  <p class="cart-card__quantity">qty: ${item.quantity}</p>
  <p class="cart-card__price">$${item.FinalPrice}</p>
</li>`;

  return newItem;
}



renderCartContents();


let cartTotal = 0;
if (cartItems) {
  let cartFooter = document.querySelector(".list-footer");
  cartFooter.className = "show";
  const cartPrices = cartItems.map((cartItem) => cartItem.quantity * cartItem.FinalPrice);
  cartTotal = cartPrices.reduce((acc, num) => acc + num, 0);

  let finalCart = document.querySelector(".list-total");
  finalCart.innerHTML = `Total: $${cartTotal.toFixed(2)}`;
}