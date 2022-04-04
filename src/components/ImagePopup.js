function ImagePopup() {
    return (
        <div className="popup popup_image">
            <div className="popup__container-img">
                <button className="popup__close" type="button" aria-label="Закрыть"></button>
                <img className="popup__big-img" />
                <p className="popup__title-img"></p>
            </div>
        </div>
    )
}

export default ImagePopup