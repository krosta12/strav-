import { cardList, imgsLink, targetElement } from "./const.js";

function displayCart() {
  const orders = JSON.parse(localStorage.getItem("orders")) || [];
  targetElement.innerHTML = "";

  if (orders.length === 0) {
    targetElement.innerHTML = "<p>Teie korv on tühi.</p>";
    return;
  }

  let totalCost = 0;

  orders.forEach((order) => {
    const card = document.createElement("div");
    card.classList.add("card");
    const itemPrice = getPriceById(order.id);
    totalCost += itemPrice * order.quantity;

    card.innerHTML = `
      <h2>Food ID: ${order.id}</h2>
      <img src="${imgsLink.concat(
        "food_".concat(order.id)
      )}.png" alt="Food ID: ${order.id}">
      <p>kogus: <span id="quantity-${order.id}">${order.quantity}</span></p>
      <p>hind 1tk: ${itemPrice}€</p>
      <p>Terve arv: ${(itemPrice * order.quantity).toFixed(2)}€</p>
      <button class="increase-btn" data-id="${order.id}">Lisada</button>
      <button class="decrease-btn" data-id="${order.id}">Väheneda</button>
      <button class="remove-btn" data-id="${order.id}">Kustuta</button>
    `;

    targetElement.appendChild(card);
  });

  const totalElement = document.createElement("div");
  totalElement.innerHTML = `<h3>Terve arv: ${totalCost.toFixed(2)}€</h3>`;
  targetElement.appendChild(totalElement);

  addEventListenersToButtons();
}

function getPriceById(id) {
  const item = cardList.find((item) => item.id === id);
  return item ? item.price : 0;
}

function addEventListenersToButtons() {
  const increaseButtons = document.querySelectorAll(".increase-btn");
  const decreaseButtons = document.querySelectorAll(".decrease-btn");
  const removeButtons = document.querySelectorAll(".remove-btn");

  increaseButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const id = parseInt(button.getAttribute("data-id"), 10);
      increaseQuantity(id);
    });
  });

  decreaseButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const id = parseInt(button.getAttribute("data-id"), 10);
      decreaseQuantity(id);
    });
  });

  removeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const id = parseInt(button.getAttribute("data-id"), 10);
      removeFromCart(id);
    });
  });
}

function increaseQuantity(id) {
  const orders = JSON.parse(localStorage.getItem("orders")) || [];
  const order = orders.find((order) => order.id === id);

  if (order) {
    order.quantity += 1;
    localStorage.setItem("orders", JSON.stringify(orders));
    displayCart();
  }
}

function decreaseQuantity(id) {
  const orders = JSON.parse(localStorage.getItem("orders")) || [];
  const order = orders.find((order) => order.id === id);

  if (order) {
    if (order.quantity > 1) {
      order.quantity -= 1;
    } else {
      removeFromCart(id);
      return;
    }
    localStorage.setItem("orders", JSON.stringify(orders));
    displayCart();
  }
}

function removeFromCart(id) {
  let orders = JSON.parse(localStorage.getItem("orders")) || [];
  orders = orders.filter((order) => order.id !== id);
  localStorage.setItem("orders", JSON.stringify(orders));
  displayCart();
}

document.addEventListener("DOMContentLoaded", displayCart);
