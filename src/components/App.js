import React from 'react'
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Api from "../utils/Api"
import { optionsApi } from "../utils/optionsApi"
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import ImagePopup from './ImagePopup'
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import ConfirmDeletePopup from './ComfirmDeletePopup';
import Preloader from './Preloader';

const api = new Api(optionsApi)

const defaultPopupsLoader = {
  editProfile: false,
  editAvatar: false,
  addCard: false,
  deleteCard: false
}

function App() {
  // Состояние попапов
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false)
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false)
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false)
  const [isComfirmDeletePopupOpen, setIsComfirmDeletePopupOpen] = React.useState(false)
  const [selectedCard, setSelectedCard] = React.useState({ isOpen: false })

  // Состояние загрузчиков
  const [popupsLoader, setPopupsLoader] = React.useState(defaultPopupsLoader)
  const [isLoading, setIsLoading] = React.useState(true)

  // Данные пользовотеля и карточек
  const [currentUser, setCurrentUser] = React.useState({})
  const [cards, setCards] = React.useState([])

  // ID Карточки
  const [cardId, setCardId] = React.useState('')

  // Запрос данных пользователя и карточек с сервера
  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(res => {
        setCurrentUser(res[0])
        setCards(res[1])
        setIsLoading(false)
      })
      .catch(err => console.log("Не удалось загрузить страницу:", err))
  }, [])

  // Управление состоянием попапов
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true)
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true)
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true)
  }

  function handleComfirmDeleteClick(card) {
    setIsComfirmDeletePopupOpen(true)
    setCardId(card._id)
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setIsEditAvatarPopupOpen(false)
    setIsComfirmDeletePopupOpen(false)
    setSelectedCard({ isOpen: false })
  }

  // Открыть большую карточку
  function handleCardClick(card) {
    setSelectedCard({
      isOpen: true,
      ...card
    })
  }

  // Обновить данные пользователя
  function handleUpdateUser(data) {
    setPopupsLoader({
      ...popupsLoader,
      editProfile: true
    });

    api.editUserInfo(data)
      .then(res => {
        setCurrentUser(res)
        closeAllPopups()
      })
      .catch(err => console.log("Не удалось изменить данные профиля:", err))
      .finally(() => setPopupsLoader(defaultPopupsLoader))
  }

  // Обновить аватар пользователя
  function handleUpdateAvatar(data) {
    setPopupsLoader({
      ...popupsLoader,
      editAvatar: true
    });

    api.editUserAvatar(data)
      .then(res => {
        setCurrentUser(res)
        closeAllPopups()
      })
      .catch(err => console.log("Не удалось сменить аватар:", err))
      .finally(() => setPopupsLoader(defaultPopupsLoader))
  }

  // Управление лайком карточки
  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    api.changeLikeCardStatus(card._id, !isLiked)
      .then(newCard => {
        setCards(state => state.map(c => c._id === card._id ? newCard : c));
      })
      .catch(err => console.log("Не удалось изменить лайк:", err))
  }

  // Управление удалением карточки
  function handleCardDelete() {
    setPopupsLoader({
      ...popupsLoader,
      deleteCard: true
    });

    api.deleteCard(cardId)
      .then(() => {
        setCards(cards.filter(c => c._id !== cardId))
        closeAllPopups()
      })
      .catch(err => console.log("Не удалось удалить карточку:", err))
      .finally(() => setPopupsLoader(defaultPopupsLoader))
  }

  // Управление добовлением карточки
  function handleAddPlaceSubmit(data) {
    setPopupsLoader({
      ...popupsLoader,
      addCard: true
    });

    api.addCard(data)
      .then(newCard => {
        setCards([newCard, ...cards]);
        closeAllPopups()
      })
      .catch(err => console.log("Не удалось добавить карточку:", err))
      .finally(() => setPopupsLoader(defaultPopupsLoader))
  }

  return (
    <div className="page__content">
      <CurrentUserContext.Provider value={currentUser}>
        <Header />
        {isLoading ?
          <Preloader /> :
          <Main
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onEditAvatar={handleEditAvatarClick}
            onCardClick={handleCardClick}
            cards={cards}
            onCardLike={handleCardLike}
            onCardDelete={handleComfirmDeleteClick}
          />
        }
        <Footer />

        {/* Редактировать профиль */}
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
          loader={popupsLoader.editProfile}
        />

        {/* Аватар */}
        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
          loader={popupsLoader.editAvatar}
        />

        {/* Новое место */}
        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onAddPlace={handleAddPlaceSubmit}
          loader={popupsLoader.addCard}
        />

        {/* Подтверждение удаления */}
        <ConfirmDeletePopup
          isOpen={isComfirmDeletePopupOpen}
          onClose={closeAllPopups}
          onDelete={handleCardDelete}
          loader={popupsLoader.deleteCard}
        />

        {/* Большая картинка */}
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      </CurrentUserContext.Provider>
    </div >
  );
}

export default App;
