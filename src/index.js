import { initialCards } from "./cards";
import "./pages/index.css";

const page = document.querySelector(".page");

const cardContainer = document.querySelector(".places__list");
const cardTemplate = document.querySelector("#card-template").content;
const card = cardTemplate.querySelector(".card").cloneNode(true);
const formNewPlace = document.forms["new-place"];

const newCardButton = document.querySelector(".profile__add-button");
const popupNew = document.querySelector(".popup_type_new-card");
const popupClose = popupNew.querySelector(".popup__close");

const buttonDelete = card.querySelector(".card__delete-button");
const buttonLike = card.querySelector(".card__like-button");

/* переменные редактирования профиля  */

const editButton = document.querySelector(".profile__edit-button");
const popupEdit = document.querySelector(".popup_type_edit");
const popupCloseEdit = popupEdit.querySelector(".popup__close");
const profileTitleEdit = document.querySelector(".profile__title");
const profileDesciptionEdit = document.querySelector(".profile__description");
const profileTitle = document.querySelector(".popup__input_type_name");
const profileDesciption = document.querySelector(".popup__input_type_description");

const formEdit = document.forms["edit-profile"];

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
  if (evt.target.classList.contains("card__delete-button")) {
    evt.target.parentElement.remove();
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
    closeWindowNew();
  }

  if (evt.target === editButton) {
    profileTitle.value = profileTitleEdit.textContent;
    profileDesciption.value = profileDesciptionEdit.textContent;

    popupEdit.classList.add("popup_is-opened");
  }
  if (evt.target === popupCloseEdit) {
    closeWindowEdit();
  }
});
function closeWindowEdit() {
  popupEdit.classList.remove("popup_is-opened");
}

function closeWindowNew() {
  popupNew.classList.remove("popup_is-opened");
}

/* функция добавления поста */
formNewPlace.addEventListener("submit", (evt) => {
  evt.preventDefault();

  const newCard = card.cloneNode(true);
  const cardImage = newCard.querySelector(".card__image");
  const cardTitle = newCard.querySelector(".card__title");

  cardImage.src = formNewPlace.link.value;
  cardTitle.textContent = formNewPlace.placeName.value;

  cardContainer.prepend(newCard);

  closeWindowNewNew();
  formNewPlace.reset();
});

/* функция сохранения редактирования профиля */

formEdit.addEventListener("submit", (evt) => {
  evt.preventDefault();

  profileTitleEdit.textContent = profileTitle.value;
  profileDesciptionEdit.textContent = profileDesciption.value;
  closeWindowEdit();
});
