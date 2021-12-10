const buttonMenu = document.querySelector(".header__menu");
const popup = document.querySelector(".popup");
const content = document.querySelector(".content");
const popupForm = document.querySelector(".popup-form");
const closeButton = document.querySelector(".popup-form__close-button");
let i = 0;
j = 0;
const buyBotton = document.querySelector(".content__button");

buttonMenu.addEventListener("click", () => {
  buttonMenu.classList.toggle("header__menu-active");
  popup.classList.toggle("popup-active");
  if (i === 0) {
    content.style.display = "none";
    popup.style.display = "flex";
    i = 1;
  } else {
    content.style.display = "flex";
    popup.style.display = "none";
    i = 0;
  }
});

buyBotton.addEventListener("click", () => {
  if (j === 0) {
    popupForm.style.display = "flex";
    j = 1;
  } else {
    popupForm.style.display = "none";
    j = 0;
  }
});

closeButton.addEventListener("click", () => {
  popupForm.style.display = "none";
});
