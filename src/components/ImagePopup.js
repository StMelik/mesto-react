function ImagePopup(props) {
    const { card, onClose } = props

    return (
        <div className={`popup popup_image ${card.isOpen && 'popup_opened'}`}>
            <div className="popup__container-img">
                <button
                    className="popup__close"
                    type="button"
                    aria-label="Закрыть"
                    onClick={onClose}
                ></button>
                <img
                    className="popup__big-img"
                    src={card && card.link}
                    alt={card && card.name}
                />
                <p className="popup__title-img">{card && card.name}</p>
            </div>
        </div>
    )
}

export default ImagePopup