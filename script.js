// Toggle class active untuk hamburger menu
const navbarNav = document.querySelector('.navbar-nav');
// ketika hamburger menu di klik
document.querySelector('#hamburger-menu').onclick = () => {
  navbarNav.classList.toggle('active');
};

//buat list cart
let openShoppingCart = document.querySelector('#shoppingCart');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let listCard = document.querySelector('.list-card');
let quantity = document.querySelector('.quantity');
let closeShoppingCart = document.querySelector('.close-shopping');
let list = document.querySelector('.list');

openShoppingCart.addEventListener('click', () => {
  body.classList.toggle('active');
})

closeShoppingCart.addEventListener('click', () => {
  body.classList.remove('active');
})

let products = [
  {
    id: 1,
    name: 'kopi luwak',
    image: 'home.jpg',
    price: 10000,
  },
  {
    id: 2,
    name: 'kopi abc',
    image: 'home.jpg',
    price: 10000,
  },
  {
    id: 3,
    name: 'kopi luwak',
    image: 'home.jpg',
    price: 10000,
  }
];

let listCards = [];

// function initapp() {
//   products.forEach((value, key) => {
//     let newDiv = document.createElement('div');
//     newDiv.innerHTML = `
//       <img src="1x/${value.image}" />
//       <div class="title">${value.name}</div>
//       <div class="price">Rp. ${value.price.toLocaleString()}</div>
//       <button onclick = "addToCard(${key})">Add To Cart</button>
//     `;
//     list.appendChild(newDiv);
//   });
// }
// initapp();

function addToCart(key) {
  if (listCards[key] == null) {
    listCards[key] = products[key];
    listCards[key].quantity = 1;
  } else {
    listCards[key].quantity++;
  }
  reloadCart();
}

function reloadCart() {
  listCard.innerHTML = '';
  let count = 0;
  let totalPrice = 0;
  listCards.forEach((value, key) => {
    totalPrice += value.price * value.quantity;
    count += value.quantity;
    if (value != null) {
      let newDiv = document.createElement('li');
      newDiv.innerHTML = `
      <div><img src = "1x/${value.image}"></div>
      <div>${value.name}</div>
      <div>${value.price.toLocaleString()}</div>
      <div> ${value.quantity}</div>
      `;
      listCard.appendChild(newDiv);
    }
    
  });
  total.innerText = totalPrice.toLocaleString();
  quantity.innerText = count;
}

