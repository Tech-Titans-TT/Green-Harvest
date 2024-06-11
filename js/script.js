const navbar = document.querySelector('.header-nav');

let lastScrollTop = 0;

window.addEventListener('scroll', function() {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Scroll down
        navbar.style.top = '-100px'; // Navbar'ı yukarı kaydırarak gizle
    } else {
        // Scroll up
        navbar.style.top = '32px'; // Navbar'ı geri getir
    }

    lastScrollTop = scrollTop;
});