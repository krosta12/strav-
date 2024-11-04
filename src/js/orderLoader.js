const imgsLink = "/src/img/";

const targetElement = document.getElementById("cardContainer");

function displayCart() {
  const orders = JSON.parse(localStorage.getItem("orders")) || [];

  targetElement.innerHTML = "";

  if (orders.length === 0) {
    targetElement.innerHTML = "<p>Ваша корзина пуста.</p>";
    return;
  }

  orders.forEach((order) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <h2>Товар ID: ${order.id}</h2>
      <img src="${imgsLink.concat(
        "food_".concat(order.id)
      )}.png" alt="Товар ID: ${order.id}">
      <p>Количество: <span id="quantity-${order.id}">${
      order.quantity
    }</span></p>
      <button onclick="increaseQuantity(${order.id})">Увеличить</button>
      <button onclick="decreaseQuantity(${order.id})">Уменьшить</button>
      <button onclick="removeFromCart(${order.id})">Удалить</button>
    `;

    targetElement.appendChild(card);
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
