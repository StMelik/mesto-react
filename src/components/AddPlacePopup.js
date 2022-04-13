import { useState } from "react"
import PopupWithForm from "./PopupWithForm"

function AddPlacePopup(props) {
    const { loader, isOpen, onClose, onAddPlace } = props

    const [name, setName] = useState('')
    const [link, setLink] = useState('')

    function handleSubmit(evt) {
        evt.preventDefault()
        onAddPlace({
            name,
            link
        })
        setName('')
        setLink('')
    }

    return (
        <PopupWithForm
            name="add"
            title="Новое место"
            buttonText={loader ? "Сохранение..." : "Создать"}
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
        >
            <label className="popup__form-label">
                <input
                    className="popup__input popup__input_value_name"
                    id="title-input" type="text"
                    name="name"
                    placeholder="Название"
                    required
                    minLength="2"
                    maxLength="30"
                    autoComplete="off"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <span className="popup__input-error title-input-error"></span>
            </label>
            <label className="popup__form-label">
                <input
                    className="popup__input popup__input_value_link"
                    id="link-input"
                    type="url"
                    name="link"
                    placeholder="Ссылка на картинку"
                    required
                    value={link}
                    onChange={e => setLink(e.target.value)}
                />
                <span className="popup__input-error link-input-error"></span>
            </label>
        </PopupWithForm>
    )
}

export default AddPlacePopup