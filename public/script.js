'use strict';

// MOBILE NAV MENU
const openMenu = document.querySelector('.hamburger');
const closeMenu = document.querySelector('.close-menu');
const mobileNav = document.querySelector('.main-nav');

// GALLERY SECTION
const imageGallery = document.querySelectorAll('.thumb');
const mainImg = document.querySelector('.main-img');
const nextImg = document.querySelector('.next');
const prevImg = document.querySelector('.prev');

// CART
const cart = document.querySelector('.cart');
const emptyMsg = document.querySelector('.empty-msg');
const cartCounter = document.querySelector('.cart-counter');
const productContainer = document.querySelector('.product-container');
const cartContainer = document.querySelector('.cart-container');

const price = document.querySelector('.price');
const counter = document.querySelector('.counter');
const cartBtn = document.querySelector('.btn-cart');

const btnMinus = document.querySelector('.btn-minus');
const btnPlus = document.querySelector('.btn-plus');
const orderBtn = document.querySelector('.order-btn');
const cartCheckoutBtn = document.querySelector('.checkout-btn');
// CART

btnPlus.addEventListener('click', increase);
btnMinus.addEventListener('click', decrease);

cartBtn.addEventListener('click', openCart);

orderBtn.addEventListener('click', addQtyToCart);

function increase() {
  let value = parseInt(counter.innerHTML);
  value = value + 1;
  counter.innerHTML = value;
}

function decrease() {
  let value = parseInt(counter.innerHTML);
  if (value > 0) {
    value = value - 1;
    counter.innerHTML = value;
  }
}

// OPEN CART
function openCart() {
  if (cartContainer.classList.contains('hidden')) {
    cartContainer.classList.remove('hidden');
  } else {
    cartContainer.classList.add('hidden');
  }
}
// CART QTY
let qty = 0;
function addQtyToCart() {
  qty = qty + parseInt(counter.innerHTML);

  let productHtml = `<div class="product-container">
  <div class="cart-item">
<img
  class="sneakers-img"
  src="/images/image-product-1-thumbnail.jpg"
  alt="Sneakers image in cart"
/>
<div class="product-details">
  <div class="product-name">Autumn Limited Edition...</div>
  <div class="price-container">
    <div class="price">$125.00</div>
    <span class="price-x">x</span>
    <div class="count">${qty}</div>
    <div class="total"> $${125.0 * qty}</div>
  </div>
</div>
<img
  class="delete-btn"
  src="/images/icon-delete.svg"
  alt="delete button"
/>
</div>
</div>`;
  productContainer.innerHTML = productHtml;
  cartCounter.innerText = qty;
  counter.innerText = 0;

  const deleteBtn = document.querySelector('.delete-btn');

  deleteBtn.addEventListener('click', decreaseQtyInCart);

  if (
    qty > 0 &&
    cartCounter.classList.contains('hidden') &&
    cartCheckoutBtn.classList.contains('hidden')
  ) {
    cartCounter.classList.remove('hidden');
    cartCheckoutBtn.classList.remove('hidden');
    emptyMsg.style.display = 'none';
  } else {
    cartCounter.classList.add('hidden');
    cartCheckoutBtn.classList.add('hidden');
    emptyMsg.style.display = 'block';
  }
}

function decreaseQtyInCart() {
  const count = document.querySelector('.count');
  const total = document.querySelector('.total');
  cartCounter.innerHTML--;
  count.innerHTML--;
  total.innerHTML = `$${125 * cartCounter.innerHTML}`;

  if (cartCounter.innerHTML && count.innerHTML == 0) {
    productContainer.innerHTML = '';
    cartCheckoutBtn.classList.add('hidden');
    emptyMsg.style.display = 'block';
    cartCounter.classList.add('hidden');
  } else if (cartCounter.innerHTML && count.innerHTML > 0) {
    cartCheckoutBtn.classList.remove('hidden');
    emptyMsg.style.display = 'none';
  }
}

// HAM MENU
openMenu.addEventListener('click', () => {
  mobileNav.classList.toggle('hidden');
});

closeMenu.addEventListener('click', () => {
  mobileNav.classList.toggle('hidden');
});

// IMAGE GALLERY
const imgArray = new Array();
let current = 0;
const arrowNext = document.querySelector('.next');
const arrowPrev = document.querySelector('.prev');

imgArray[0] = new Image();
imgArray[0].src = '/images/image-product-1.jpg';

imgArray[1] = new Image();
imgArray[1].src = '/images/image-product-2.jpg';

imgArray[2] = new Image();
imgArray[2].src = '/images/image-product-3.jpg';

imgArray[3] = new Image();
imgArray[3].src = '/images/image-product-4.jpg';

nextImg.addEventListener('click', () => {
  if (current < imgArray.length - 1) {
    current++;
  } else {
    current = 0;
  }

  mainImg.src = imgArray[current].src;
});

prevImg.addEventListener('click', () => {
  if (current > 0) {
    current--;
  } else {
    current = imgArray.length - 1;
  }

  mainImg.src = imgArray[current].src;
});

imageGallery.forEach((thumb) => {
  thumb.addEventListener('click', changeImage);
});

function changeImage(event) {
  imageGallery.forEach((thumb) => {
    thumb.classList.remove('active');
  });
  event.target.classList.add('active');
  mainImg.src = event.target.src.replace('-thumbnail', '');
}
