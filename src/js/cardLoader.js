import { cardList, imgsLink, targetElement } from "./const.js";

function addToCart(id) {
  let orders = JSON.parse(localStorage.getItem("orders")) || [];

  const existingOrder = orders.find((order) => order.id === id);

  if (existingOrder) {
    existingOrder.quantity += 1;
  } else {
    orders.push({ id, quantity: 1 });
  }

  localStorage.setItem("orders", JSON.stringify(orders));
}

window.addToCart = addToCart;

function renderCards() {
  cardList.forEach((el) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <h2>${el.title}</h2>
      <img src="${imgsLink.concat("food_".concat(el.id))}.png" alt="${
      el.title
    }">
      <p>${el.description}</p>
      <p>${el.price}€</p>
      <button class="toShip" onclick="addToCart(${
        el.id
      })">Lisa korvi</button>
    `;

    targetElement.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", renderCards);
