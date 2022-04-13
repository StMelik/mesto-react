
import React from "react"
import PopupWithForm from "./PopupWithForm"

function AddPlacePopup(props) {

    const [name, setName] = React.useState('')
    const [link, setLink] = React.useState('')

    function handleSubmit(evt) {
        evt.preventDefault()
        props.onAddPlace({
            name,
            link
        })
    }

    function handleChangeName(evt) {
        setName(evt.target.value)
    }

    function handleChangeLink(evt) {
        setLink(evt.target.value)
    }

    return (
        <PopupWithForm
            name="add"
            title="Новое место"
            buttonText={props.loader ? "Сохранение..." : "Создать"}
            isOpen={props.isOpen}
            onClose={props.onClose}
            onSubmit={handleSubmit}
        >
            <label className="popup__form-label">
                <input className="popup__input popup__input_value_name" id="title-input" type="text" name="name"
                    placeholder="Название" required minLength="2" maxLength="30" autoComplete="off"
                    value={name}
                    onChange={handleChangeName} />
                <span className="popup__input-error title-input-error"></span>
            </label>
            <label className="popup__form-label">
                <input className="popup__input popup__input_value_link" id="link-input" type="url" name="link"
                    placeholder="Ссылка на картинку" required value={link}
                    onChange={handleChangeLink} />
                <span className="popup__input-error link-input-error"></span>
            </label>
        </PopupWithForm>
    )
}

export default AddPlacePopup