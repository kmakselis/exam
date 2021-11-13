const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  // slidesPerView: 3,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
  // when window width is >= 320px
  1000: {
    slidesPerView: 3,
    slidesPerGroup: 1,
    spaceBetween: 20
  }
}
});
//
// var swiper2 = new Swiper('.swiper2', {
//   // Optional parameters
//   direction: 'horizontal',
//   loop: true,
//   // slidesPerView: 1,
//
//   // If we need pagination
//   pagination: {
//     el: '.swiper-pagination',
//   },
//
//   // Navigation arrows
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
//
//   breakpoints: {
//   // when window width is >= 320px
//   1000: {
//     slidesPerView: 1,
//     slidesPerGroup: 3,
//     spaceBetween: 20
//   }
// }
// });
