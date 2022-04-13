import { useRef, useEffect } from "react"
import PopupWithForm from "./PopupWithForm"

function EditAvatarPopup(props) {
    const { loader, isOpen, onClose, onUpdateAvatar } = props

    const avatarLink = useRef()

    function handleSubmit(evt) {
        evt.preventDefault()
        onUpdateAvatar({
            avatar: avatarLink.current.value
        })
    }

    useEffect(() => {
        avatarLink.current.value = ''
    }, [isOpen])

    return (
        <PopupWithForm
            name="avatar"
            title="Обновить аватар"
            buttonText={loader ? "Сохранение..." : "Сохранить"}
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
        >
            <label className="popup__form-label">
                <input
                    ref={avatarLink}
                    className="popup__input popup__input_value_link"
                    id="link-avatar"
                    type="url"
                    name="avatar"
                    placeholder="Ссылка на аватар"
                    required
                />
                <span className="popup__input-error link-avatar-error"></span>
            </label>
        </PopupWithForm>
    )
}

export default EditAvatarPopup