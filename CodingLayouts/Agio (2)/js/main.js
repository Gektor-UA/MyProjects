//* Скрипт запуску анімації на першому екрані (набір тексту)
function typeText(targetId, texts, speed) {
  return new Promise(async (resolve) => {
    const targetElement = document.getElementById(targetId);
    let index = 0;
    let isDeleting = false;
    let currentTextIndex = 0;
    let currentText = texts[currentTextIndex];

    async function type() {
      if (isDeleting) {
        targetElement.innerHTML = currentText.substring(0, index);
        index--;

        if (index < 0) {
          isDeleting = false;
          currentTextIndex = (currentTextIndex + 1) % texts.length;
          currentText = texts[currentTextIndex];
          await sleep(500); // Затримка перед початком наступного тексту
        }
      } else {
        targetElement.innerHTML = currentText.substring(0, index + 1);
        index++;

        if (index === currentText.length) {
          isDeleting = true;
          await sleep(1000); // Затримка перед початком видалення тексту
        }
      }

      if (index === -1 && isDeleting) {
        targetElement.innerHTML = "\u00A0"; // Додаємо нерухомий пробіл після видалення
      }

      setTimeout(type, speed);
    }

    function sleep(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    }

    type(); // Починаємо писати текст
    resolve(); // Викликаємо обіцяння після початку анімації
  });
}

async function runTextAnimation() {
  const texts = [
    "Арбитраж трафика",
    "Выкуп каналов",
    "Продажа каналов",
    "Реклама", // Додайте ваш четвертий текст сюди
  ];
  await typeText("crypto-text", texts, 100);
}

runTextAnimation();

//* Скрипт перевертання блоків в choose__item
function handleScroll() {
  var windowHeight = window.innerHeight;
  let targetElements = document.querySelectorAll(".choose__item");
  let i = 0;
  targetElements.forEach((targetElement) => {
    let elementPosition = targetElement.getBoundingClientRect().top;

    let windowWidth = window.innerWidth;
    if (elementPosition + 320 < window.innerHeight && windowWidth <= 700) {
      targetElement.querySelector(".content-front").classList.add("anim-front");
      targetElement.querySelector(".content-back").classList.add("anim-back");
    } else {
      targetElement
        .querySelector(".content-front")
        .classList.remove("anim-front");
      targetElement
        .querySelector(".content-back")
        .classList.remove("anim-back");
    }
    i++;
    if (i === 4) {
      i = 0;
    }
  });
}
window.addEventListener("scroll", handleScroll);

//* Функція для відкриття/закриття мобільного меню
function toggleMobileMenu() {
  var mobileMenu = document.getElementById("mobileMenu");
  var burgerMenu = document.querySelector(".menu");
  mobileMenu.classList.toggle("active");
  document.addEventListener("click", function (event) {
    if (
      !mobileMenu.contains(event.target) &&
      !burgerMenu.contains(event.target)
    ) {
      mobileMenu.classList.remove("active");
    }
  });
}
document.addEventListener("click", (e) => {
  const menus = document.querySelectorAll(".menu");
  const mobMenu = document.getElementById("mobileMenu");
  const burgerFooter = document.querySelector(".menu_footer");
  menus.forEach((btn) => {
    if (e.target !== btn && !btn.contains(e.target) && e.target !== mobMenu) {
      btn.classList.remove("active");
    } else if (e.target !== mobMenu) {
      btn.classList.toggle("active");
    }
  });
  if (!footerMenu.contains(e.target) && !burgerFooter.contains(e.target)) {
    footerMenu.classList.remove("active");
  }
});

//* Скрипт анімації цифр в блоці AGIO Platform та анімація блоків About Agio
document.addEventListener("DOMContentLoaded", function () {
  // Отримуємо всі блоки platform__about-item
  var aboutItems = document.querySelectorAll(".platform__about-item");
  // Отримуємо всі блоки animatedText
  var animatedText = document.getElementById("animated-text");
  var animatedText1 = document.getElementById("animated-text1");
  var animatedText2 = document.getElementById("animated-text2");
  // Функція, яка перевіряє, чи елемент видимий на екрані
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  // Параметри анімації
  var startValue = 0;
  var animationDuration = 1000;
  // Флаги для відстеження, чи вже відбулася анімація для animatedText, animatedText1, animatedText2
  var animatedTextAnimated = false;
  var animatedText1Animated = false;
  var animatedText2Animated = false;
  function animateVisibleItems() {
    // Анімація для блоків platform__about-item
    aboutItems.forEach(function (item, index) {
      if (isElementInViewport(item)) {
        setTimeout(function () {
          item.classList.add("fade-in");
        }, index * 200); // Затримка між анімаціями для створення послідовності
      }
    });
    // Анімація для блоків animatedText
    if (!animatedTextAnimated && isElementInViewport(animatedText)) {
      startAnimation(0, 240000, animationDuration, animatedText);
      animatedTextAnimated = true;
    }
    if (!animatedText1Animated && isElementInViewport(animatedText1)) {
      startAnimation(0, 10, animationDuration, animatedText1);
      animatedText1Animated = true;
    }
    if (!animatedText2Animated && isElementInViewport(animatedText2)) {
      startAnimation(0, 500, animationDuration, animatedText2);
      animatedText2Animated = true;
    }
  }
  // Додаємо подію прокручування для перевірки видимості блоків
  window.addEventListener("scroll", animateVisibleItems);
  // Викликаємо функцію спочатку, щоб анімація відбулася, якщо блоки вже видимі при завантаженні сторінки
  animateVisibleItems();

  function startAnimation(start, end, duration, target) {
    var increment = (end - start) / duration;
    var startTime = null;
    function animateValue(timestamp) {
      if (!startTime) {
        startTime = timestamp;
      }
      var elapsedTime = timestamp - startTime;
      if (elapsedTime < duration) {
        var currentValue = start + increment * elapsedTime;
        target.textContent = Math.ceil(currentValue);
        requestAnimationFrame(animateValue);
      } else {
        target.textContent = end;
      }
    }
    // Запускаємо анімацію
    requestAnimationFrame(animateValue);
  }
});
const footerMenu = document.getElementById("footerMenu");
const burgerFooter = document.querySelector(".menu_footer");

function toggleFooterMenu() {
  const footerMenu = document.getElementById("footerMenu");
  footerMenu.classList.toggle("active");
}

document.addEventListener("click", function (event) {
  const burgerFooter = document.querySelector(".menu_footer");
  const footerMenu = document.getElementById("footerMenu");

  // Перевіряємо, чи клікнуто на burgerFooter або його дочірніх елементах
  if (event.target === burgerFooter || burgerFooter.contains(event.target)) {
    // Перевіряємо, чи у burgerFooter є клас "active"
    if (burgerFooter.classList.contains("active")) {
      // Якщо клас "active" є, то забираємо його
      burgerFooter.classList.remove("active");
      footerMenu.classList.remove("active");
    } else {
      // Якщо клас "active" відсутній, то додаємо його
      burgerFooter.classList.add("active");
    }
  } else if (
    !event.target.classList.contains("menu_footer") &&
    !footerMenu.contains(event.target)
  ) {
    // Якщо клік відбувся поза burgerFooter та footerMenu, то забираємо клас "active" у footerMenu
    footerMenu.classList.remove("active");
    burgerFooter.classList.remove("active");
  }
});
window.addEventListener("scroll", function () {
  const who_we_are_plane = document.querySelector(".who_we_are_plane");
  const choose_plane = document.querySelector(".choose_plane");
  const partners_system_plane = document.querySelector(
    ".partners_system_plane"
  );
  const why_telegram_graphic_bar_one = document.querySelector(
    ".why_telegram_graphic_bar_one"
  );
  const why_telegram_graphic_bar_two = document.querySelector(
    ".why_telegram_graphic_bar_two"
  );
  const why_telegram_graphic_bar_three = document.querySelector(
    ".why_telegram_graphic_bar_three"
  );
  const why_telegram_graphic_bar_four = document.querySelector(
    ".why_telegram_graphic_bar_four"
  );

  const scrollY = window.scrollY;
  // let elementPosition = who_we_are_plane.getBoundingClientRect().top;
  // var windowHeight = window.innerHeight;
  // console.log("windowHeight:" + windowHeight);
  // console.log("elementPosition:" + elementPosition);
  if (scrollY >= 1252 && scrollY <= 2600) {
    who_we_are_plane.classList.add("plane-animation");
  } else {
    who_we_are_plane.classList.remove("plane-animation");
  }
  if (scrollY >= 3000 && scrollY <= 5000) {
    choose_plane.classList.add("plane-choose-animation");
  } else {
    choose_plane.classList.remove("plane-choose-animation");
  }
  if (scrollY >= 4500) {
    partners_system_plane.classList.add("plane-partners-animation");
  } else {
    partners_system_plane.classList.remove("plane-partners-animation");
  }
  if (scrollY >= 1500 && scrollY <= 4000) {
    why_telegram_graphic_bar_one.classList.add(
      "why_telegram_graphic_bar_one_anim"
    );
    why_telegram_graphic_bar_two.classList.add(
      "why_telegram_graphic_bar_two_anim"
    );
    why_telegram_graphic_bar_three.classList.add(
      "why_telegram_graphic_bar_three_anim"
    );
    why_telegram_graphic_bar_four.classList.add(
      "why_telegram_graphic_bar_four_anim"
    );
  } else {
    why_telegram_graphic_bar_one.classList.remove(
      "why_telegram_graphic_bar_one_anim"
    );
    why_telegram_graphic_bar_two.classList.remove(
      "why_telegram_graphic_bar_two_anim"
    );
    why_telegram_graphic_bar_three.classList.remove(
      "why_telegram_graphic_bar_three_anim"
    );
    why_telegram_graphic_bar_four.classList.remove(
      "why_telegram_graphic_bar_four_anim"
    );
  }
});
