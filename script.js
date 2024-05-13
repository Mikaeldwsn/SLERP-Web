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

openShoppingCart.addEventListener('click', () => {
  body.classList.toggle('active');
})

closeShoppingCart.addEventListener('click', () => {
  body.classList.remove('active');
})