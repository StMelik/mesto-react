import React from 'react'
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup'
import { optionsApi } from "../utils/optionsApi"
import Api from "../utils/Api"
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import EditProfilePopup from './EditProfilePopup';

const api = new Api(optionsApi)

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false)

  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false)

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false)

  const [selectedCard, setSelectedCard] = React.useState({ isOpen: false })

  const [currentUser, setCurrentUser] = React.useState({})

  React.useEffect(() => {
    api.getUserInfo()
      .then(res => {
        setCurrentUser(res)
      })
  }, [])

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true)
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true)
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true)
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setIsEditAvatarPopupOpen(false)
    setSelectedCard({ isOpen: false })
  }

  function handleCardClick(card) {
    setSelectedCard({
      isOpen: true,
      ...card
    })
  }

  function handleUpdateUser(data) {
    api.editUserInfo(data)
      .then(res => {
        setCurrentUser(res)
        closeAllPopups()
      })
  }

  return (
    <div className="page__content">
      <CurrentUserContext.Provider value={currentUser}>
        <Header />

        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
        />

        <Footer />

        {/* Редактировать профиль */}
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />



        {/* Аватар */}
        <PopupWithForm
          name="avatar"
          title="Обновить аватар"
          buttonText="Сохранить"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        >
          <label className="popup__form-label">
            <input className="popup__input popup__input_value_link" id="link-avatar" type="url" name="avatar"
              placeholder="Ссылка на аватар" required />
            <span className="popup__input-error link-avatar-error"></span>
          </label>
        </PopupWithForm>

        {/* Новое место */}
        <PopupWithForm
          name="add"
          title="Новое место"
          buttonText="Создать"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        >
          <label className="popup__form-label">
            <input className="popup__input popup__input_value_name" id="title-input" type="text" name="name"
              placeholder="Название" required minLength="2" maxLength="30" autoComplete="off" />
            <span className="popup__input-error title-input-error"></span>
          </label>
          <label className="popup__form-label">
            <input className="popup__input popup__input_value_link" id="link-input" type="url" name="link"
              placeholder="Ссылка на картинку" required />
            <span className="popup__input-error link-input-error"></span>
          </label>
        </PopupWithForm>

        {/* Большая картинка */}
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      </CurrentUserContext.Provider>
    </div >
  );
}

export default App;
