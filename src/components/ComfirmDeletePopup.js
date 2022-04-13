import PopupWithForm from "./PopupWithForm"

function ConfirmDeletePopup(props) {
    const { loader, isOpen, onClose, onDelete } = props

    function handleSubmit(evt) {
        evt.preventDefault()
        onDelete()
    }

    return (
        <PopupWithForm
            name="delete"
            title="Вы уверены?"
            buttonText={loader ? "Удаление..." : "Да"}
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
        ></PopupWithForm>
    )
}

export default ConfirmDeletePopup