import {initialCards} from "./cards"
import "./pages/index.css"
const page = document.querySelector(".page");

const cardContainer = document.querySelector(".places__list");
const cardTemplate = document.querySelector("#card-template").content;
const card = cardTemplate.querySelector(".card").cloneNode(true);
const form = document.forms["new-place"];

const newCardButton = document.querySelector(".profile__add-button");
const popupNew = document.querySelector(".popup_type_new-card");
const popupClose = popupNew.querySelector(".popup__close");

const buttonDelete = card.querySelector(".card__delete-button");
const buttonLike = card.querySelector(".card__like-button");

function createInitialCard(array) {
  array.forEach((element) => {
    /* переменные */
    const newCard = card.cloneNode(true);
    const cardImage = newCard.querySelector(".card__image");
    const cardTitle = newCard.querySelector(".card__title");

    /* генерация карточек */

    cardTitle.textContent = element.name;
    cardImage.src = element.link;
    cardContainer.append(newCard);
  });
}

createInitialCard(initialCards);

/* кнопка удаления */
page.addEventListener("click", (evt) => {
  console.log(evt.target);
  if (evt.target.classList.contains("card__delete-button")) {
    console.log("clickDelete");
    console.dir(evt.target)
    evt.target.parentElement.remove()
  }

  /* кнопка лайка */

  if (evt.target.classList.contains("card__like-button")) {
    evt.target.classList.toggle("card__like-button_is-active");
  }

  if (evt.target === newCardButton) {
    popupNew.classList.add("popup_is-opened");
  }
  /* кнопка для закрытия окна создания поста */

  if (evt.target === popupClose) {
    closeWindow();
  }
});

function closeWindow() {
  popupNew.classList.remove("popup_is-opened");
}

/* функция добавления поста */
form.addEventListener("submit", (evt) => {
  evt.preventDefault();

  const newCard = card.cloneNode(true);
  const cardImage = newCard.querySelector(".card__image");
  const cardTitle = newCard.querySelector(".card__title");

  cardImage.src = form.link.value;
  cardTitle.textContent = form.placeName.value;

  cardContainer.prepend(newCard);

  closeWindow();
  form.reset();
});
