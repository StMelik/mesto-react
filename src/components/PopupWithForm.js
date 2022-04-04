function PopupWithForm(props) {
    return (
        <>
            <div className={`popup popup_${props.name}`}>
                <div className="popup__container">
                    <button className="popup__close" type="button" aria-label="Закрыть"></button>
                    <h3 className="popup__title">{props.title}</h3>
                    <form className="popup__form" action="#" name={props.name} novalidate>
                        {props.children}
                        {/* <label className="popup__form-label">
                            <input className="popup__input popup__input_value_name" id="name-input" type="text" name="name"
                                required minlength="2" maxlength="40" autocomplete="off"
                                placeholder="Ваше имя" />
                            <span className="popup__input-error name-input-error"></span>
                        </label>
                        <label className="popup__form-label">
                            <input className="popup__input popup__input_value_about" id="about-input" type="text"
                                name="about" required minlength="2" maxlength="200" autocomplete="off"
                                placeholder="Пару слов о себе" />
                            <span className="popup__input-error about-input-error"></span>
                        </label>

                        <button className="popup__submit" type="submit">Сохранить</button> */}
                    </form>
                </div>
            </div>

            {/* <div className={`popup popup_${props.name}`}>
                <div className="popup__container">
                    <button className="popup__close" type="button" aria-label="Закрыть"></button>
                    <h3 className="popup__title">{props.title}</h3>
                    <form className="popup__form" action="#" name={props.name} novalidate>
                        {props.children} */}
            {/* <label className="popup__form-label">
                            <input className="popup__input popup__input_value_name" id="title-input" type="text" name="name"
                                placeholder="Название" required minlength="2" maxlength="30" autocomplete="off" />
                            <span className="popup__input-error title-input-error"></span>
                        </label>
                        <label className="popup__form-label">
                            <input className="popup__input popup__input_value_link" id="link-input" type="url" name="link"
                                placeholder="Ссылка на картинку" required />
                            <span className="popup__input-error link-input-error"></span>
                        </label>
                        <button className="popup__submit" type="submit">Создать</button> */}
            {/* </form>
                </div>
            </div> */}

            {/* <div className={`popup popup_${props.name}`}>
                <div className="popup__container">
                    <button className="popup__close" type="button" aria-label="Закрыть"></button>
                    <h3 className="popup__title">{props.title}</h3>
                    <form className="popup__form" action="#" name={props.name} novalidate>
                        {props.children} */}
            {/* <label className="popup__form-label">
                            <input className="popup__input popup__input_value_link" id="link-avatar" type="url" name="avatar"
                                placeholder="Ссылка на аватар" required />
                            <span className="popup__input-error link-avatar-error"></span>
                        </label>
                        <button className="popup__submit" type="submit">Сохранить</button> */}
            {/* </form>
                </div>
            </div> */}

            {/* <div className={`popup popup_${props.name}`}>
                <div className="popup__container">
                    <button className="popup__close" type="button" aria-label="Закрыть"></button>
                    <h3 className="popup__title">{props.title}</h3>
                    {props.children} */}
            {/* <button className="popup__submit delete-button">Да</button> */}
            {/* </div>
            </div> */}
        </>
    )
}