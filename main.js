// ===== Menu Data =====
const MENU = [
  {
    id: 1,
    name: "Capurrr-ccino",
    price: 4.99,
    category: "drinks",
    img: "assets/cappuccino.jpg"
  },
  {
    id: 2,
    name: "Purrfect Latte",
    price: 6.50,
    category: "drinks",
    img: "assets/latte.png"
  },
  {
    id: 3,
    name: "Meowcha",
    price: 5.00,
    category: "drinks",
    img: "assets/matcha.jpg"
  },
  {
    id: 4,
    name: "Meocha",
    price: 7.00,
    category: "drinks",
    img: "assets/mocha.jpg"
  },
  {
    id: 5,
    name: "Strawberry Purrr-cake",
    price: 2.99,
    category: "treats",
    img: "assets/strawberrycupcake.jpg"
  },
  {
    id: 6,
    name: "Tuna Purrr-nini",
    price: 8.99,
    category: "meals",
    img: "assets/tunapanini.jpg"
  }
];

let category = "all";

// ===== 1) Render Menu =====
function renderMenu() {
  const grid = document.getElementById("menuGrid");

  if (!grid) return;

  const term = "";

  const filtered = MENU.filter(item =>
    (category === "all" || item.category === category) &&
    (term === "" || item.name.toLowerCase().includes(term))
  );

  grid.innerHTML = filtered
    .map(item => `
      <article class="card">
        <img src="${item.img}" alt="${item.name}">
        <div class="price">$${item.price.toFixed(2)}</div>
        <strong>${item.name}</strong>
        <button class="btn" onclick="alert('Added: ${item.name}')">
          Add to cart
        </button>
      </article>
    `)
    .join("");
}

// ===== 2) Meow of the Day =====
function meowOfTheDay() {
  const lines = [
    "Bella says: take life one nap at a time.",
    "Stay pawsitive and drink more coffee!",
    "A meow a day keeps the blues away.",
    "Purr your heart into everything you do."
  ];

  const el = document.getElementById("meow");

  if (el) {
    const randomLine = lines[Math.floor(Math.random() * lines.length)];
    el.textContent = randomLine;
  }
}

// ===== 3) Order Now =====
function orderNow() {
  alert("Thanks for your order! Your cozy drink is on the way ");
}

// ===== 4) Scroll To Menu =====
function scrollToMenu() {
  const section = document.getElementById("menu");

  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }
}

// ===== Optional Category Helper =====
function setCategory(cat) {
  category = cat;
  renderMenu();
}

// ===== Init =====
document.addEventListener("DOMContentLoaded", () => {
  renderMenu();
  meowOfTheDay();

  const orderButton = document.getElementById("orderBtn");
  const menuLink = document.getElementById("menuLink");

  if (orderButton) {
    orderButton.addEventListener("click", (event) => {
      event.preventDefault();
      orderNow();
    });
  }

  if (menuLink) {
    menuLink.addEventListener("click", (event) => {
      event.preventDefault();
      scrollToMenu();
    });
  }
});

// ===== Expose Functions =====
window.meowOfTheDay = meowOfTheDay;
window.orderNow = orderNow;
window.scrollToMenu = scrollToMenu;
window.setCategory = setCategory;
