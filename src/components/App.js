import React from 'react'
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup'

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false)

  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false)

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false)

  const [selectedCard, setSelectedCard] = React.useState({ isOpen: false })


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

  return (
    <div className="page__content">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />
      <Footer />

      {/* Аватар */}
      <PopupWithForm
        name="avatar"
        title="Обновить аватар"
        children={
          <>
            <label className="popup__form-label">
              <input className="popup__input popup__input_value_link" id="link-avatar" type="url" name="avatar"
                placeholder="Ссылка на аватар" required />
              <span className="popup__input-error link-avatar-error"></span>
            </label>
            <button className="popup__submit" type="submit">Сохранить</button>
          </>
        }
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      />

      {/* Редактировать профиль */}
      <PopupWithForm
        name="edit"
        title="Редактировать профиль"
        children={
          <>
            <label className="popup__form-label">
              <input className="popup__input popup__input_value_name" id="name-input" type="text" name="name"
                required minLength="2" maxLength="40" autoComplete="off"
                placeholder="Ваше имя" />
              <span className="popup__input-error name-input-error"></span>
            </label>
            <label className="popup__form-label">
              <input className="popup__input popup__input_value_about" id="about-input" type="text"
                name="about" required minLength="2" maxLength="200" autoComplete="off"
                placeholder="Пару слов о себе" />
              <span className="popup__input-error about-input-error"></span>
            </label>

            <button className="popup__submit" type="submit">Сохранить</button>
          </>
        }
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      />

      {/* Новое место */}
      <PopupWithForm
        name="add"
        title="Новое место"
        children={
          <>
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
            <button className="popup__submit" type="submit">Создать</button>
          </>
        }
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      />

      {/* Большая картинка */}
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </div>
  );
}

export default App;
