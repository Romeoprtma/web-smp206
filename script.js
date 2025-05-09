//toggle mobile navbar
const toggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    toggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

//Slider Fasilitas
    const swiper = new Swiper(".mySwiper", {
       navigation: {
           nextEl: ".swiper-button-next",
           prevEl: ".swiper-button-prev",
       },
   });