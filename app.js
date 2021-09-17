const navOpen = document.querySelector(".open");
const navClose = document.querySelector(".close");
const links = document.querySelector(".links");
const i = document.querySelector(".fas");

navOpen.addEventListener("click", function () {
  links.classList.add("show-links");
  //i.classList.toggle("fa-times");
});

navClose.addEventListener("click", function () {
  links.classList.remove("show-links");
  //i.classList.toggle("fa-times");
});