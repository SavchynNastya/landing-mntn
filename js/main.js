(function () {
    const header = document.querySelector("header");
    window.onscroll = () => {
        if (window.pageYOffset > 50){
            header.classList.add("header-active");
        } else {
            header.classList.remove("header-active");
        }
    };
}());


(function () {
    const burgerMenu = document.querySelector(".burger__menu-button");
    const menu = document.querySelector(".navbar");
    const accountLink = document.querySelector(".account");
    const menuCloseItem = document.querySelector(".header__nav-close");
    const menuLinks = document.querySelectorAll(".nav__link");
    // console.log(menuLinks);
    burgerMenu.addEventListener("click", () => {
        menu.classList.add("header__nav-active");
        accountLink.classList.add("header__nav-active");
    });
    menuCloseItem.addEventListener("click", () => {
      menu.classList.remove("header__nav-active");
      accountLink.classList.remove("header__nav-active");
    });
    // console.log(window.innerWidth);
    // if (window.innerWidth < 768) {
        for (let i = 0; i < menuLinks.length; i += 1) {
            menuLinks[i].addEventListener("click", () => {
                menu.classList.remove("header__nav-active");
                accountLink.classList.remove("header__nav-active");
            });
        }
    // }
}());


(function () {
  const smoothScroll = function (targetEl, duration) {
    const headerElHeight = document.querySelector(".header").clientHeight;
    let target = document.querySelector(targetEl);
    let targetPosition = target.getBoundingClientRect().top - headerElHeight;
    let startPosition = window.pageYOffset;
    let startTime = null;

    const ease = function (t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    };

    const animation = function (currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, startPosition, targetPosition, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };
    requestAnimationFrame(animation);
  };

  const scrollTo = function () {
    const links = document.querySelectorAll(".js-scroll");
    links.forEach((each) => {
      each.addEventListener("click", function () {
        const currentTarget = this.getAttribute("href");
        smoothScroll(currentTarget, 1000);
      });
    });
  };
  scrollTo();
})();