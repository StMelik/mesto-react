// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="page__content">
      <header className="header">
        <img className="header__logo" src="images/logo.svg" alt="Логотип" />
      </header>

      <main className="main">
        <section className="profile">
          <button className="profile__avatar-box">
            <img className="profile__avatar" src="images/no-avatar.png" alt="Аватар" />
          </button>
          <div className="profile__info">
            <h1 className="profile__name">Загрузка ...</h1>
            <button className="profile__edit-button" type="button" aria-label="Открыть"></button>
            <p className="profile__about">Загрузка ...</p>
          </div>
          <button className="profile__add-button" type="button" aria-label="Открыть"></button>

          <div className="profile__popup popup popup_edit">
            <div className="popup__container">
              <button className="popup__close" type="button" aria-label="Закрыть"></button>
              <h3 className="popup__title">Редактировать профиль</h3>
              <form className="popup__form" action="#" name="edit" novalidate>
                <label className="popup__form-label">
                  <input className="popup__input popup__input_value_name" id="name-input" type="text" name="name"
                    required minlength="2" maxlength="40" autocomplete="off" />
                  <span className="popup__input-error name-input-error"></span>
                </label>
                <label className="popup__form-label">
                  <input className="popup__input popup__input_value_about" id="about-input" type="text"
                    name="about" required minlength="2" maxlength="200" autocomplete="off" />
                  <span className="popup__input-error about-input-error"></span>
                </label>

                <button className="popup__submit" type="submit">Сохранить</button>
              </form>
            </div>
          </div>

          <div className="profile__popup popup popup_add">
            <div className="popup__container">
              <button className="popup__close" type="button" aria-label="Закрыть"></button>
              <h3 className="popup__title">Новое место</h3>
              <form className="popup__form" action="#" name="add" novalidate>
                <label className="popup__form-label">
                  <input className="popup__input popup__input_value_name" id="title-input" type="text" name="name"
                    placeholder="Название" required minlength="2" maxlength="30" autocomplete="off" />
                  <span className="popup__input-error title-input-error"></span>
                </label>
                <label className="popup__form-label">
                  <input className="popup__input popup__input_value_link" id="link-input" type="url" name="link"
                    placeholder="Ссылка на картинку" required />
                  <span className="popup__input-error link-input-error"></span>
                </label>
                <button className="popup__submit" type="submit">Создать</button>
              </form>
            </div>
          </div>
        </section>

        <section className="elements">
        </section>
      </main>
      <footer className="footer">
        <p className="footer__text">© 2022 Mesto Russia</p>
      </footer>
    </div>
  );
}

export default App;
