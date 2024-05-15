// Toggle class active buat hamburger menu
const navbarNav = document.querySelector(".navbar-nav");
// ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//buat list cart
let openShoppingCart = document.querySelector("#shoppingCart");
let body = document.querySelector("body");
let total = document.querySelector(".total");
let listCard = document.querySelector(".list-card");
let quantity = document.querySelector(".quantity");
let closeShoppingCart = document.querySelector(".close-shopping");
let list = document.querySelector(".list");

openShoppingCart.addEventListener("click", () => {
  body.classList.toggle("active");
});

closeShoppingCart.addEventListener("click", () => {
  body.classList.remove("active");
});

let products = [
  {
    id: 0,
    name: "kopi luwak",
    image: "home.jpg",
    price: 10000,
  },
  {
    id: 1,
    name: "kopi abc",
    image: "home.jpg",
    price: 10000,
  },
  {
    id: 2,
    name: "americano",
    image: "home.jpg",
    price: 10000,
  },
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

function addToCart(id) {
  let product = products.find((product) => product.id === id);

  if (product == null) {
    console.log(`Product with id ${id} does not exist.`);
    return;
  }

  let item = listCards.find((item) => item.id === id);

  if (item == null) {
    item = { ...product }; // Create a copy of the product to avoid modifying the original
    item.quantity = 1;
    item.basePrice = product.price; // Store the base price
    listCards.push(item);
  } else {
    item.quantity++;
  }

  reloadCart();
}

function reloadCart() {
  listCards = listCards.filter((item) => item !== undefined);

  let count = 0;
  let totalPrice = 0;

  // Clear the listCard before appending new items
  listCard.innerHTML = "";

  listCards.forEach((value) => {
    totalPrice += value.price * value.quantity;
    count += value.quantity;

    let newDiv = document.createElement("li");
    newDiv.innerHTML = `
      <div><div><img src = "1x/${value.image}"></div>
      <div class="item"><div>${value.name}</div>
      <div>${value.price.toLocaleString()}</div></div>
      <div class="buttons">
      <div class="button-label"> ${value.quantity}</div>
        <button onclick="changeQuantity(${value.id}, ${
      value.quantity - 1
    })">-</button>
        <button onclick="changeQuantity(${value.id}, ${
      value.quantity + 1
    })">+</button>
      </div></div>
    `;
    listCard.appendChild(newDiv);
  });

  total.innerText = totalPrice.toLocaleString();
  quantity.innerText = count;
}

function changeQuantity(id, quantity) {
  let item = listCards.find((item) => item.id === id);

  if (item == null) {
    console.log(`Item with id ${id} does not exist in listCards.`);
    return;
  }

  if (quantity == 0) {
    listCards = listCards.filter((item) => item.id !== id);
  } else {
    item.quantity = quantity;
    item.price = quantity * item.basePrice; // Calculate the price based on the base price
  }

  reloadCart();
}

// active buat search form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};
