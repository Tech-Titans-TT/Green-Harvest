const navbar = document.querySelector(".header-section");
const hamburgerMenu = document.querySelector(".header-hamburger-bar");
const closeMenu = document.querySelector(".responsive-close-button");
const responsiveMenu = document.querySelector(".responsive-menu");
const headerLinks = document.querySelectorAll(".header-menu-list-item-link");
const headerShopButton = document.querySelector(".header-menu-button");
const anchors = document.querySelectorAll('a[href^="#"]');
const headerLogo = document.querySelector(".header-logo");
const errorMessage = document.getElementById('error-message');
const input = document.getElementById('name');
const circleDOM = document.querySelector('.circleSVG circle');
const chevronUpDOM = document.querySelector('.chevron-up');
let viewHeight;

window.onload = function() {
  viewHeight = document.documentElement.offsetHeight;
};

//circle calculate function
const calculateCircle = (viewHeight, scrollHeight) => {
  let dashArray = Math.floor((scrollHeight * 315)/viewHeight);
  if(circleDOM !== undefined && circleDOM !== null){
    circleDOM.style.strokeDashoffset = `${315 - ( dashArray + (dashArray*0.152))}`;
  }
}

//scroll ile navbar gizlenmesi ve aktif edilmesi
let lastScrollTop = 0;
window.addEventListener("scroll", () => {
  let scrollTop = window.scrollY || document.documentElement.scrollTop;
  console.log(scrollTop)
  //need to for circle calculate
  let offsetHeight = document.documentElement.offsetHeight;
  calculateCircle(offsetHeight, scrollTop);

  // scroll ile navbar gizlenmesi
  scrollTop > lastScrollTop
    ? navbar.classList.add("header-section-active")
    : navbar.classList.remove("header-section-active");
  lastScrollTop = scrollTop;
  if (scrollTop == 0) {
    headerLinks.forEach((link) => {
      link.classList.remove("bg-green", "bg-bordo", "box-shadow-effect");
      link.classList.add("border-scroll");
    });
    headerLogo.classList.remove("header-drop-shadow");
    hamburgerMenu.classList.remove('header-drop-shadow')
    headerShopButton.classList.remove("box-shadow-effect");
    headerShopButton.classList.remove("bg-green");
  } else if (scrollTop > 5 && scrollTop <= 2139) {
    headerLinks.forEach((link) => {
      link.classList.remove("bg-green", "border-scroll");
      link.classList.add("bg-bordo", "box-shadow-effect");
    });
    headerLogo.classList.add("header-drop-shadow");
    hamburgerMenu.classList.add('header-drop-shadow')
    headerShopButton.classList.add("box-shadow-effect");
    headerShopButton.classList.remove("bg-green");
  } else if (scrollTop > 2140 && scrollTop <= 3411) {
    headerLinks.forEach((link) => {
      link.classList.remove("bg-bordo");
      link.classList.add("bg-green");
    });
    headerShopButton.classList.add("bg-green");
  } else if (scrollTop > 3411 && scrollTop <= 4104) {
    headerLinks.forEach((link) => {
      link.classList.add("bg-bordo");
      link.classList.remove("bg-green");
    });
    headerShopButton.classList.remove("bg-green");
  } else {
    headerLinks.forEach((link) => {
      link.classList.remove("bg-bordo");
      link.classList.add("bg-green");
    });
    headerShopButton.classList.remove("bg-bordo");
    headerShopButton.classList.add("bg-green");
  }

    //Circle
    if(scrollTop < 100){
      chevronUpDOM?.classList.add('v-hidden');
    }
    else{
      chevronUpDOM?.classList.remove('v-hidden');
    }



});
//responsive menu acilip kapanma olayi
responsiveMenu.classList.remove("active-responsive-menu");
hamburgerMenu.addEventListener("click", () => {
  responsiveMenu.classList.add("active-responsive-menu");
});
closeMenu.addEventListener("click", () => {
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
  window.scrollTo(0, 0);
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

const setText = (name, message) => {
  if (name = "name"){
    errorMessage.textContent = message;
  }
}

const setDefaultText = _=>{
  errorMessage.textContent = '';
}

function validateForm() {
  setDefaultText()
;  // Temel bir validasyon örneği (örneğin, en az 5 karakter)
  if (input.checkValidity()) {
    
    // errorMessage.classList.remove('show');
    input.classList.remove('error');
    input.classList.add('success');
  } else {
    // errorMessage.classList.add('show');
    setText("name","Deneme");
    input.classList.remove('success');
    input.classList.add('error');
  }
}