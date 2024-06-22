(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const k=document.querySelector(".header-section"),q=document.querySelector(".header-hamburger-bar"),R=document.querySelector(".responsive-close-button"),w=document.querySelector(".responsive-menu"),d=document.querySelectorAll(".header-menu-list-item-link"),l=document.querySelector(".header-menu-button"),B=document.querySelector(".header-logo"),b=document.getElementById("error-message-name"),p=document.getElementById("error-message-email"),y=document.getElementById("error-message-comment"),u=document.getElementById("name"),S=document.querySelector(".circleSVG circle"),a=document.querySelector(".back-to-top-container"),f=document.getElementById("email"),h=document.getElementById("comment");document.getElementById("submitButton");const H=document.querySelector("#vegetables"),V=document.querySelector(".how-it-works-container"),M=document.querySelector("#reviews"),T=document.querySelector(".your-order"),F=document.querySelector("#hero"),$=document.querySelector("#header"),z=document.querySelector("#myForm"),X=[F,V,H,M,T];function I(){P||(H.style.contentVisibility="visible",setTimeout(t=>{M.style.contentVisibility="visible"},1e3),setTimeout(t=>{T.style.contentVisibility="visible"},2e3),P=!0)}let C=0,g=!1,O,Y,A,P=!1;window.onload=function(){document.documentElement.offsetHeight};const _=(t,s)=>{if(S!=null){let r=Math.floor(s*315/t),n=315-(r+r*.152);S.style.strokeDashoffset=`${n>=0?n:0}`}},N=()=>{const t=$.offsetHeight,s=window.scrollY||document.documentElement.scrollTop;X.forEach(r=>{const n=r.getBoundingClientRect().top+s-t;s>=n&&s<n+r.offsetHeight&&(s===0?(d.forEach(e=>{e.classList.add("border-scroll"),e.classList.remove("bg-green","bg-bordo")}),B.classList.remove("header-drop-shadow"),q.classList.remove("header-drop-shadow"),l.classList.remove("bg-green")):r===F||r===V?(d.forEach(e=>{e.classList.add("bg-bordo"),e.classList.remove("bg-green","border-scroll")}),B.classList.add("header-drop-shadow"),q.classList.add("header-drop-shadow"),l.classList.remove("bg-green"),l.classList.add("bg-bordo")):r===H?(d.forEach(e=>{e.classList.add("bg-green"),e.classList.remove("bg-bordo")}),l.classList.remove("bg-bordo"),l.classList.add("bg-green")):r===M?(d.forEach(e=>{e.classList.remove("bg-green"),e.classList.add("bg-bordo")}),l.classList.add("bg-bordo"),l.classList.remove("bg-green")):r===T?(d.forEach(e=>{e.classList.add("bg-green"),e.classList.remove("bg-bordo")}),l.classList.remove("bg-bordo"),l.classList.add("bg-green")):console.log("error"))})};window.addEventListener("scroll",N);N();window.addEventListener("scroll",()=>{let t=window.scrollY||document.documentElement.scrollTop,s=document.documentElement.offsetHeight;_(s,t),t>C?k.classList.add("header-section-active"):k.classList.remove("header-section-active"),C=t,t<100?a==null||a.classList.remove("opacity-half"):a==null||a.classList.add("opacity-half")});w.classList.remove("active-responsive-menu");q.addEventListener("click",()=>{w.classList.add("active-responsive-menu")});R.addEventListener("click",()=>{w.classList.remove("active-responsive-menu")});d.forEach(t=>{t.addEventListener("click",function(){w.classList.remove("active-responsive-menu")})});document.addEventListener("DOMContentLoaded",function(){const t=document.getElementById("scroll-thumb"),s=document.querySelectorAll('a[href^="#"]');if(history.scrollRestoration="manual",window.scrollTo(0,0),s.forEach(r=>{r.addEventListener("click",function(n){n.preventDefault();const e=this.getAttribute("href").substring(1),o=document.getElementById(e);o&&window.scrollTo({top:o.offsetTop,behavior:"smooth"})})}),t){const n=c=>{if(!g)return;if(Math.abs(c.clientX-A)>100){g=!1,document.removeEventListener("mousemove",n),document.removeEventListener("mouseup",e);return}const m=window.innerHeight,v=t.offsetHeight,L=m-v;let i=Y+(c.clientY-O);i=Math.max(0,Math.min(i,L)),t.style.transform=`translateY(${i}px)`;const E=document.documentElement.scrollHeight,x=i/L*(E-m);window.scrollTo(0,x),x>30&&I()},e=()=>{g=!1,document.removeEventListener("mousemove",n),document.removeEventListener("mouseup",e)};t.addEventListener("mousedown",c=>{c.preventDefault(),g=!0,O=c.clientY,Y=t.getBoundingClientRect().top,A=c.clientX,document.addEventListener("mousemove",n),document.addEventListener("mouseup",e)});let o;window.addEventListener("scroll",()=>{o||(o=!0,requestAnimationFrame(()=>{if(g){o=!1;return}const c=document.documentElement.scrollHeight,m=window.innerHeight,v=window.scrollY/(c-m),L=t.offsetHeight,i=m-L,E=v*i;t.style.transform=`translateY(${E}px)`,o=!1,Math.floor(v*100)>30&&I()},{passive:!0}))})}});const D=(t,s)=>{t==="name"?(b.textContent=s,b.classList.add("show")):t==="email"?(p.textContent=s,p.classList.add("show")):t==="comment"&&(y.textContent=s,y.classList.add("show"))},U=()=>{b.textContent="",p.textContent="",y.textContent="",b.classList.remove("show"),p.classList.remove("show"),y.classList.remove("show")};function W(t){console.log("event : ",t),U();let s=!0;u.value.trim()===""?(D("name","* Please do not leave the Name Surname field blank."),u.classList.remove("success"),u.classList.add("error"),s=!1):(u.classList.remove("error"),u.classList.add("success")),/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.(com|org|net|edu|gov|mil|biz|info|mobi|name|aero|asia|jobs|museum)$/.test(f.value.trim())?(f.classList.remove("error"),f.classList.add("success")):(D("email","* Please enter a valid Email address"),f.classList.remove("success"),f.classList.add("error"),s=!1),h.value.trim()===""?(D("comment","* Please do not leave the Description field blank"),h.classList.remove("success"),h.classList.add("error"),s=!1):(h.classList.remove("error"),h.classList.add("success")),s&&(console.log("Form submitted successfully!"),t.currentTarget.submit())}z.addEventListener("submit",t=>{t.preventDefault(),W(t)});
