function PopupWithForm(props) {
    return (
        <div className={`popup popup_${props.name} ${props.isOpen && 'popup_opened'}`}>
            <div className="popup__container">
                <button className="popup__close" type="button" aria-label="Закрыть" onClick={props.onClose}></button>
                <h3 className="popup__title">{props.title}</h3>
                <form className="popup__form" action="#" name={props.name} novalidate>
                    {props.children}
                </form>
            </div>
        </div>
    )
}

export default PopupWithForm