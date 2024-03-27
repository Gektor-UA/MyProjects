const swiperTop = new Swiper('.top__swiper', {
  effect: 'fade',
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const swiperAbout = new Swiper(".about__slider", {
  slidesPerView: 4,
  spaceBetween: 20,
  freeMode: true,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// const accordeonItems = document.querySelectorAll('.accordeon__item');
// const accordeonTrigers = document.querySelectorAll('.accordeon__triger');

// accordeonTrigers.forEach((accordeonTriger) => {
//   console.log('accordeonTriger', accordeonTriger);
//   accordeonTriger.addEventListener('click', () => {
//     console.log('click');
//     const accordeonItem = accordeonTriger.closest('.accordeon__triger').parentElement;
//     console.log('accordeonItem', accordeonItem);
//     accordeonItems.forEach((accordeonItem) => {
//       if (accordeonItem !== accordeonItem) {
//         accordeonItem.classList.remove('accordeon__item--active');
//       }
//     });
//     accordeonItem.classList.toggle('accordeon__item--active');
//   });
// });

document.querySelectorAll('.accordeon__triger').forEach((item) => {
  item.addEventListener('click', () => {
    item.parentNode.classList.toggle('accordeon__item--active');
  });
});