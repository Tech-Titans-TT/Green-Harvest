const navbar = document.querySelector('.header-section');
const hamburgerMenu = document.querySelector('.header-hamburger-bar');
const closeMenu = document.querySelector('.responsive-close-button');
const responsiveMenu = document.querySelector('.responsive-menu');
//scroll ile navbar gizlenmesi ve aktif edilmesi
let lastScrollTop = 0;
window.addEventListener('scroll', function() {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;
    console.log(scrollTop)
    if (scrollTop > lastScrollTop) {
        // Scroll down kismi
        navbar.style.top = '-100px';
    } else {
        //scroll up kismi
        navbar.style.top = '32px';
    }
    lastScrollTop = scrollTop;
});

//responsive menu acilip kapanma olayi
responsiveMenu.classList.remove('active-responsive-menu');
 hamburgerMenu.addEventListener('click', function() {
    responsiveMenu.classList.add('active-responsive-menu');
 });
 closeMenu.addEventListener('click', function() {   
    responsiveMenu.classList.remove('active-responsive-menu');
 })
