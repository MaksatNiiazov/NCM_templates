document.addEventListener('DOMContentLoaded', function () {
  // First Swiper Slider
  const slider1 = new Swiper('.slider1', {
    // Add your options for the first slider
    direction: 'horizontal',
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
    autoplay: {
      delay: 8000,
      disableOnInteraction: false,
    },
    speed: 1000,
    pagination: {
      el: '.slider1 .swiper-pagination',
      clickable: true,
    },
  });

  // Second Swiper Slider
  const slider2 = new Swiper('.slider2', {
    // Add your options for the second slider
    direction: 'horizontal',
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    navigation: {
      nextEl: '.slider2 .swiper-button-next',
      prevEl: '.slider2 .swiper-button-prev',
    },
    pagination: {
      el: '.slider2 .swiper-pagination',
      clickable: true,
    },
  });
});

  

document.addEventListener('DOMContentLoaded', function () {
  const cardsContainer1 = document.querySelector('.cards-container1');
  const cardsContainer2 = document.querySelector('.cards-container2');
  const cardWidth = document.querySelector('.card').offsetWidth + 20; // Ширина карточки с учетом отступа
  let isHovered1 = false;
  let isHovered2 = false;

  cardsContainer1.addEventListener('mouseenter', function () {
      isHovered1 = true;
      autoScroll(cardsContainer1);
  });

  cardsContainer1.addEventListener('mouseleave', function () {
      isHovered1 = false;
  });

  cardsContainer2.addEventListener('mouseenter', function () {
      isHovered2 = true;
      autoScroll(cardsContainer2);
  });

  cardsContainer2.addEventListener('mouseleave', function () {
      isHovered2 = false;
  });

  function autoScroll(container) {
      return function (event) {
          if (isHovered1 || isHovered2) {
              const mouseX = event.clientX; // Получаем координаты X мыши относительно окна браузера
              const containerRect = container.getBoundingClientRect();
              const containerX = mouseX - containerRect.left; // Получаем координаты X мыши относительно контейнера

              if (containerX < containerRect.width / 3) {
                  // Мышь слева от контейнера
                  container.scrollLeft -= 1;
              } else if (containerX > (2 * containerRect.width) / 3) {
                  // Мышь справа от контейнера
                  container.scrollLeft += 1;
              }

              requestAnimationFrame(function () {
                  autoScroll(container)(event);
              });
          }
      };
  }

  cardsContainer1.addEventListener('mousemove', autoScroll(cardsContainer1));
  cardsContainer2.addEventListener('mousemove', autoScroll(cardsContainer2));
});
