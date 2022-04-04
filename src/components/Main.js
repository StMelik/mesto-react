function Main(props) {
    return (
        <main className="main">
            <section className="profile">
                <button className="profile__avatar-box" onClick={props.onEditAvatar}>
                    <img className="profile__avatar" src="images/no-avatar.png" alt="Аватар" />
                </button>
                <div className="profile__info">
                    <h1 className="profile__name">Загрузка ...</h1>
                    <button className="profile__edit-button" type="button" aria-label="Открыть" onClick={props.onEditProfile}></button>
                    <p className="profile__about">Загрузка ...</p>
                </div>
                <button className="profile__add-button" type="button" aria-label="Открыть" onClick={props.onAddPlace}></button>
            </section>

            <section className="elements">
            </section>
        </main>
    )
}

export default Main