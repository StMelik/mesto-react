import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

function App() {
  return (
    <div className="page__content">
      <Header />
      <Main />
      <Footer />

      <div className="popup popup_image">
        <div className="popup__container-img">
          <button className="popup__close" type="button" aria-label="Закрыть"></button>
          <img className="popup__big-img" />
          <p className="popup__title-img"></p>
        </div>
      </div>

      <div className="popup popup_delete">
        <div className="popup__container">
          <button className="popup__close" type="button" aria-label="Закрыть"></button>
          <h3 className="popup__title">Вы уверены?</h3>
          <button className="popup__submit delete-button">Да</button>
        </div>
      </div>

      <div className="popup popup_avatar">
        <div className="popup__container">
          <button className="popup__close" type="button" aria-label="Закрыть"></button>
          <h3 className="popup__title">Обновить аватар</h3>
          <form className="popup__form" action="#" name="avatar" novalidate>
            <label className="popup__form-label">
              <input className="popup__input popup__input_value_link" id="link-avatar" type="url" name="avatar"
                placeholder="Ссылка на аватар" required />
              <span className="popup__input-error link-avatar-error"></span>
            </label>
            <button className="popup__submit" type="submit">Сохранить</button>
          </form>
        </div>
      </div>

      {/* Шаблон карточки */}
      <template id="card">
        <article className="elements__element element">
          <button className="element__delete" type="button" aria-label="Удалить"></button>
          <img className="element__image" />
          <div className="element__bottom">
            <h2 className="element__title"></h2>
            <div className="element__heart-box">
              <button className="element__heart-icon" type="button" aria-label="Понравилось"></button>
              <p className="element__heart-value">5</p>
            </div>
          </div>
        </article>
      </template>
    </div>
  );
}

export default App;
