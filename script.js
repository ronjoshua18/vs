const toggleMenu = document.querySelector(".toggle__menu");
const headernav = document.querySelector(".header__nav2");
toggleMenu.addEventListener("click", () => {
  toggleMenu.classList.toggle("open");
  headernav.classList.toggle("open");
});

