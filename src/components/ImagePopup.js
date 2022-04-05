function ImagePopup(props) {
    return (
        <div className={`popup popup_image ${props.card.isOpen && 'popup_opened'}`}>
            <div className="popup__container-img">
                <button className="popup__close" type="button" aria-label="Закрыть" onClick={props.onClose}></button>
                <img className="popup__big-img" src={props.card && props.card.link} alt={props.card && props.card.name} />
                <p className="popup__title-img">{props.card && props.card.name}</p>
            </div>
        </div>
    )
}

export default ImagePopup