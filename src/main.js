const navbar = document.querySelector(".header-section");
const hamburgerMenu = document.querySelector(".header-hamburger-bar");
const closeMenu = document.querySelector(".responsive-close-button");
const responsiveMenu = document.querySelector(".responsive-menu");
const headerLinks = document.querySelectorAll(".header-menu-list-item-link");
const headerShopButton = document.querySelector(".header-menu-button");
const anchors = document.querySelectorAll('a[href^="#"]');
const headerLogo = document.querySelector(".header-logo");
const errorMessageName = document.getElementById('error-message-name');
const errorMessageEmail = document.getElementById('error-message-email');
const errorMessageComment = document.getElementById('error-message-comment');
const inputname = document.getElementById('name');
const circleDOM = document.querySelector('.circleSVG circle');
const backToTop = document.querySelector('.back-to-top-container');
const scrollThumb = document.querySelector(".scroll-thumb");
const scrollTrack = document.querySelector(".scroll-track");
let viewHeight;
let lastScrollTop = 0;

window.onload = function () {
  viewHeight = document.documentElement.offsetHeight;
};
//circle calculate function
const calculateCircle = (viewHeight, scrollHeight) => {
  let dashArray = Math.floor((scrollHeight * 315) / viewHeight);
  if (circleDOM !== undefined && circleDOM !== null) {
    circleDOM.style.strokeDashoffset = `${315 - (dashArray + (dashArray * 0.152))}`;
  }
}
const inputemail = document.getElementById('email');
const inputcomment = document.getElementById('comment');
const submitButton = document.getElementById('submitButton');

//scroll ile navbar gizlenmesi ve aktif edilmesi

window.addEventListener("scroll", () => {
  let scrollTop = window.scrollY || document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight;
  const viewportHeight = window.innerHeight;
  const scrollYuzde = window.scrollY / (scrollHeight - viewportHeight);

  //thumb pozisyonu icin

  const thumbHeight = scrollThumb.offsetHeight
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
        backToTop?.classList.remove('opacity-half');
    }
    else{
        backToTop?.classList.add('opacity-half');
        
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


const setText = (field, message) => {
  if (field === "name") {
    errorMessageName.textContent = message;
    errorMessageName.classList.add('show');
  } else if (field === "email") {
    errorMessageEmail.textContent = message;
    errorMessageEmail.classList.add('show');
  } else if (field === "comment") {
    errorMessageComment.textContent = message;
    errorMessageComment.classList.add('show');
  }
}

const setDefaultText = () => {
  errorMessageName.textContent = '';
  errorMessageEmail.textContent = '';
  errorMessageComment.textContent = '';
  errorMessageName.classList.remove('show');
  errorMessageEmail.classList.remove('show');
  errorMessageComment.classList.remove('show');
}

function validateForm(event) {

  event.preventDefault();
  setDefaultText();

  let isValid = true;

  if (inputname.value.trim() === '') {
    setText("name", "* Please do not leave the Name Surname field blank.");
    inputname.classList.remove('success');
    inputname.classList.add('error');
    isValid = false;
  } else {
    inputname.classList.remove('error');
    inputname.classList.add('success');
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(inputemail.value.trim())) {
    setText("email", "* Please enter a valid Email address");
    inputemail.classList.remove('success');
    inputemail.classList.add('error');
    isValid = false;
  } else {
    inputemail.classList.remove('error');
    inputemail.classList.add('success');
  }

  if (inputcomment.value.trim() === '') {
    setText("comment", "* Please do not leave the Description field blank");
    inputcomment.classList.remove('success');
    inputcomment.classList.add('error');
    isValid = false;
  } else {
    inputcomment.classList.remove('error');
    inputcomment.classList.add('success');
  }

  if (isValid) {
    console.log('Form submitted successfully!');
    // Burada formu AJAX ile sunucuya gönderebilirsiniz
  }
}
document.getElementById('myForm').addEventListener('keydown', function (event1) {
  if (event1.key === 'Enter') {
    event.preventDefault();
    submitButton.click();
  }
});