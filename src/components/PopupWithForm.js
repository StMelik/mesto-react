function PopupWithForm(props) {
    const { name, isOpen, onClose, title, onSubmit, children, buttonText } = props

    return (
        <div className={`popup popup_${name} ${isOpen && 'popup_opened'}`}>
            <div className="popup__container">
                <button
                    className="popup__close"
                    type="button"
                    aria-label="Закрыть"
                    onClick={onClose}
                ></button>
                <h3 className="popup__title">{title}</h3>
                <form
                    className="popup__form"
                    action="#"
                    name={name}
                    noValidate
                    onSubmit={onSubmit}
                >
                    {children}
                    <button className="popup__submit" type="submit">{buttonText}</button>
                </form>
            </div>
        </div>
    )
}

export default PopupWithForm