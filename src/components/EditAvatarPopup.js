import React from "react"
import PopupWithForm from "./PopupWithForm"

function EditAvatarPopup(props) {

    const avatarLink = React.useRef()

    function handleSubmit(evt) {
        evt.preventDefault()
        props.onUpdateAvatar({
            avatar: avatarLink.current.value
        })
    }

    return (
        <PopupWithForm
            name="avatar"
            title="Обновить аватар"
            buttonText="Сохранить"
            isOpen={props.isOpen}
            onClose={props.onClose}
            onSubmit={handleSubmit}
        >
            <label className="popup__form-label">
                <input ref={avatarLink} className="popup__input popup__input_value_link" id="link-avatar" type="url" name="avatar"
                    placeholder="Ссылка на аватар" required />
                <span className="popup__input-error link-avatar-error"></span>
            </label>
        </PopupWithForm>
    )
}

export default EditAvatarPopup