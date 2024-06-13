const navbar = document.querySelector(".header-section");
const hamburgerMenu = document.querySelector(".header-hamburger-bar");
const closeMenu = document.querySelector(".responsive-close-button");
const responsiveMenu = document.querySelector(".responsive-menu");
const headerLinks = document.querySelectorAll(".header-menu-list-item-link");
const anchors = document.querySelectorAll('a[href^="#"]');
//scroll ile navbar gizlenmesi ve aktif edilmesi
let lastScrollTop = 0;
window.addEventListener("scroll", function () {
  let scrollTop = window.scrollY || document.documentElement.scrollTop;
  // scroll ile navbar gizlenmesi
  scrollTop > lastScrollTop
    ? navbar.classList.add("header-section-active")
    : navbar.classList.remove("header-section-active");
  lastScrollTop = scrollTop;
});

//responsive menu acilip kapanma olayi
responsiveMenu.classList.remove("active-responsive-menu");
hamburgerMenu.addEventListener("click", function () {
  responsiveMenu.classList.add("active-responsive-menu");
});
closeMenu.addEventListener("click", function () {
  responsiveMenu.classList.remove("active-responsive-menu");
});
// linklere tiklandiginda responsive menu kapatilmasi
headerLinks.forEach((link) => {
  link.addEventListener("click", function () {
    responsiveMenu.classList.remove("active-responsive-menu");
  });
});

//anchor olayi duzgun calismasi
document.addEventListener("DOMContentLoaded", function () {
  anchors.forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href").substring(1); // href icindeki yazinin onundeki # isaretini kaldiriyoruz
      const targetElement = document.getElementById(targetId); // gelen yazi hangi idye esitse orasi artik target element

      if (targetElement) {
        //gidecegi yer.
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: "smooth",
        });
      }
    });
  });
});
