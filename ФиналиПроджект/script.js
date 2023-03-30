const swiper = new Swiper('.swiper', {
    effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
});

window.onload = function() { 
  let doc = document.querySelector('.preloader')
  setTimeout(() => {
    doc.classList.add('load')
  },1000)

};

AOS.init();