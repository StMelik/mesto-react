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
