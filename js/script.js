const navbar = document.querySelector('.header-nav');
//scroll ile navbar gizlenmesi ve aktif edilmesi
let lastScrollTop = 0;
window.addEventListener('scroll', function() {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Scroll down kismi
        navbar.style.top = '-100px';
    } else {
        //scroll up kismi
        navbar.style.top = '32px';
    }
    lastScrollTop = scrollTop;
});
