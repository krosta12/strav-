const imgsLink = "/src/img/";
const cardList = [
  { id: 1, title: "Card 1", description: "This is the first card" },
  { id: 2, title: "Card 2", description: "This is the second card" },
  { id: 3, title: "Card 3", description: "This is the third card" },
  { id: 4, title: "Card 4", description: "This is the fourth card" },
  { id: 5, title: "Card 5", description: "This is the fifth card" },
  { id: 6, title: "Card 6", description: "This is the sixth card" },
];

const targetElement = document.getElementById("cardContainer");

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
            `;

    targetElement.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", renderCards);
