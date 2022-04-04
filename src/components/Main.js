function Main() {

    function handleEditAvatarClick() {
        const popup = document.querySelector('.popup_avatar')
        popup.classList.add('popup_opened')
    }

    function handleEditProfileClick() {
        const popup = document.querySelector('.popup_edit')
        popup.classList.add('popup_opened')
    }

    function handleAddPlaceClick() {
        const popup = document.querySelector('.popup_add')
        popup.classList.add('popup_opened')
    }

    return (
        <main className="main">
            <section className="profile">
                <button className="profile__avatar-box" onClick={handleEditAvatarClick}>
                    <img className="profile__avatar" src="images/no-avatar.png" alt="Аватар" />
                </button>
                <div className="profile__info">
                    <h1 className="profile__name">Загрузка ...</h1>
                    <button className="profile__edit-button" type="button" aria-label="Открыть" onClick={handleEditProfileClick}></button>
                    <p className="profile__about">Загрузка ...</p>
                </div>
                <button className="profile__add-button" type="button" aria-label="Открыть" onClick={handleAddPlaceClick}></button>
            </section>

            <section className="elements">
            </section>
        </main>
    )
}

export default Main