const navbar = document.querySelector(".header-nav");

//navbar scroll kontrol
let lastScrollTop = 0;
window.addEventListener("scroll", function () {
  let scrollTop = window.scrollY || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // Scroll down
    navbar.style.top = "-100px";
  } else {
    // Scroll up
    navbar.style.top = "32px";
  }

  lastScrollTop = scrollTop;
});
