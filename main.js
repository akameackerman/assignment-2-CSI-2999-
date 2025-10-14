// ---- Data: your menu items + image paths ----
const MENU = [
  { id: 1, name: 'Capurrr-ccino',         price: 4.99, category: 'drinks', img: 'assets/cappuccino.jpg' },
  { id: 2, name: 'Purrfect Latte',        price: 6.50, category: 'drinks', img: 'assets/latte.png' },
  { id: 3, name: 'Meowcha',               price: 5.00, category: 'drinks', img: 'assets/matcha.jpg' },
  { id: 4, name: 'Meocha',                price: 7.00, category: 'drinks', img: 'assets/mocha.jpg' },
  { id: 5, name: 'Strawberry Purrr-cake', price: 2.99, category: 'treats', img: 'assets/strawberrycupcake.jpg' },
  { id: 6, name: 'Tuna Purrr-nini',       price: 8.99, category: 'meals',  img: 'assets/tunapanini.jpg' },
];

let category = 'all'; // if you add filter buttons later

// ---- 1) Render the menu into #menuGrid ----
function renderMenu() {
  const grid = document.getElementById('menuGrid');
  if (!grid) return;

  // If you add a search box later, you can read its value here:
  const term = ''; // document.getElementById('search')?.value.trim().toLowerCase() || '';

  const filtered = MENU.filter(i =>
    (category === 'all' || i.category === category) &&
    (term === '' || i.name.toLowerCase().includes(term))
  );

  grid.innerHTML = filtered.map(i => `
    <article class="card">
      <img src="${i.img}" alt="${i.name}">
      <div class="price">$${i.price.toFixed(2)}</div>
      <strong>${i.name}</strong>
      <button class="btn" onclick="alert('Added: ${i.name}')">Add to cart</button>
    </article>
  `).join('');
}

// ---- 2) Meow of the Day ----
function meowOfTheDay() {
  const lines = [
    'Bella says: take life one nap at a time.',
    'Paws and relax — you deserve a treat.',
    'Stay pawsitive and drink more coffee!',
    'A meow a day keeps the blues away.',
    'Purr your heart into everything you do.',
  ];
  const el = document.getElementById('meow');
  if (el) el.textContent = lines[Math.floor(Math.random() * lines.length)];
}

// ---- 3) Optional: category filter helper (if you add buttons) ----
function setCategory(cat) {
  category = cat;
  renderMenu();
}

// ---- Init once the DOM is ready ----
document.addEventListener('DOMContentLoaded', () => {
  renderMenu();
  meowOfTheDay();
});

// Expose functions used by inline onclick (if any)
window.meowOfTheDay = meowOfTheDay;
window.setCategory = setCategory;
