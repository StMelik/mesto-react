import PopupWithForm from "./PopupWithForm"

function ConfirmDeletePopup(props) {

    function handleSubmit(evt) {
        evt.preventDefault()
        props.onDelete()
    }

    return (
        <PopupWithForm
            name="delete"
            title="Вы уверены?"
            buttonText={props.loader ? "Удаление..." : "Да"}
            isOpen={props.isOpen}
            onClose={props.onClose}
            onSubmit={handleSubmit}
        ></PopupWithForm>
    )
}

export default ConfirmDeletePopup