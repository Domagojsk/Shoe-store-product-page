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
