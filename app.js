const navOpen = document.querySelector(".open");
const navClose = document.querySelector(".close");
const links = document.querySelector(".links");
const i = document.querySelector(".fas");

navOpen.addEventListener("click", function () {
  links.classList.add("show-links");
});

navClose.addEventListener("click", function () {
  links.classList.remove("show-links");
});

window.onscroll = () => {
  if (window.pageYOffset > 50) {
    document
      .getElementById("navbar")
      .classList.add("navbar--color-background");
  } else {
    document
      .getElementById("navbar")
      .classList.remove("navbar--color-background");
  }
}