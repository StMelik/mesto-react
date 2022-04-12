import React from "react"
import { optionsApi } from "../utils/optionsApi"
import Api from "../utils/Api"
import Card from "./Card"
// import noAvatar from '../images/no-avatar.png'
import { CurrentUserContext } from "../contexts/CurrentUserContext"

const api = new Api(optionsApi)

function Main(props) {
    const currentUser = React.useContext(CurrentUserContext)

    return (
        <main className="main">
            <section className="profile">
                <button className="profile__avatar-box" onClick={props.onEditAvatar}>
                    <img className="profile__avatar" src={currentUser.avatar} alt="Аватар" />
                </button>
                <div className="profile__info">
                    <h1 className="profile__name">{currentUser.name}</h1>
                    <button className="profile__edit-button" type="button" aria-label="Открыть" onClick={props.onEditProfile}></button>
                    <p className="profile__about">{currentUser.about}</p>
                </div>
                <button className="profile__add-button" type="button" aria-label="Открыть" onClick={props.onAddPlace}></button>
            </section>

            <section className="elements">
                {
                    props.cards.map(card => (
                        <Card
                            card={card}
                            onCardClick={props.onCardClick}
                            onCardLike={props.onCardLike}
                            onCardDelete={props.onCardDelete}
                        />
                    ))
                }
            </section>
        </main>
    )
}

export default Main