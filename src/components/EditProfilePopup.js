import React from "react"
import PopupWithForm from "./PopupWithForm"
import { CurrentUserContext } from "../contexts/CurrentUserContext"

function EditProfilePopup(props) {
    // console.log('render');

    const currentUser = React.useContext(CurrentUserContext)


    React.useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
    }, [currentUser])

    const [name, setName] = React.useState()
    const [description, setDescription] = React.useState()

    function handleSubmit(evt) {
        evt.preventDefault()
        props.onUpdateUser({
            name,
            about: description
        })
    }

    return (
        <PopupWithForm
            name="edit"
            title="Редактировать профиль"
            buttonText="Сохранить"
            isOpen={props.isOpen}
            onClose={props.onClose}
            onSubmit={handleSubmit}
        >
            <label className="popup__form-label">
                <input className="popup__input popup__input_value_name" id="name-input" type="text" name="name"
                    required minLength="2" maxLength="40" autoComplete="off"
                    placeholder="Ваше имя"
                    value={name}
                    onChange={(e) => setName(e.target.value)} />
                <span className="popup__input-error name-input-error"></span>
            </label>
            <label className="popup__form-label">
                <input className="popup__input popup__input_value_about" id="about-input" type="text"
                    name="about" required minLength="2" maxLength="200" autoComplete="off"
                    placeholder="О себе"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)} />
                <span className="popup__input-error about-input-error"></span>
            </label>
        </PopupWithForm>
    )
}

export default EditProfilePopup