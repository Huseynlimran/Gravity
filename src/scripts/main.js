const nav = document.querySelector(".nav-links");
const burger = document.querySelector(".burger");
const navLinks = document.querySelectorAll(".nav-links li");
const linkHref = document.querySelectorAll(".linksNav");

if (burger) {
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    burger.classList.toggle("toggle");
  });
}

function linkAction() {
  nav.classList.remove("nav-active");
  burger.classList.remove("toggle");
}
linkHref.forEach((n) => n.addEventListener("click", linkAction));

const input = document.querySelector(".inputLinks");

input.addEventListener("click", () => {
  let hideInput = document.querySelector(".hideInput");

  hideInput.classList.toggle("activeInput");
});



let navbar = document.querySelector("header");

document.addEventListener("scroll", () => {
  let navbar = document.querySelector("header");

  if(scrollY > 0){
    navbar.classList.add("sticky")
  }else{
    navbar.classList.remove("sticky")
  }
});
