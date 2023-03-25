let popupOpenButton = document.querySelector('.profile__edit-button');
let popupWindow = document.querySelector('.popup');
let popupCloseButton = document.querySelector('.popup__close');
let nameInput = document.querySelector('.popup__form-name');
let professionInput = document.querySelector('.popup__form-profession');
let popupForm = document.querySelector('.popup__form');
let profileTitle = document.querySelector('.profile__title');
let profileDescription = document.querySelector('.profile__description');


function openPopup(){
  popupWindow.classList.add('popup_opened');
}

function closePopup(){
  popupWindow.classList.remove('popup_opened');
}

popupCloseButton.addEventListener('click', closePopup);

popupForm.addEventListener('submit',(event)=>{
  event.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileDescription.textContent = professionInput.value;
  closePopup();
})

popupOpenButton.addEventListener('click', () =>{
  openPopup();
  nameInput.value = profileTitle.textContent;
  professionInput.value = profileDescription.textContent;
})