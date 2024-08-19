const swiper = new Swiper('.swiper-container', {
  slidesPerView: 3,
  spaceBetween: 20,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.slider--next',
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  }
});

function toggleBurgerMenu() {
  const burgerMenu = document.querySelector('.burger-menu');
  burgerMenu.classList.toggle('active');
}