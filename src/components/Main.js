import React from "react"
import { api } from "../utils/api"
import Card from "./Card"
import noAvatar from '../images/no-avatar.png'


function Main(props) {
    const [userName, setUserName] = React.useState('Загрузка ...')
    const [userDescription, setUserDescription] = React.useState('Загрузка ...')
    const [userAvatar, setUserAvatar] = React.useState(noAvatar)
    const [cards, setCards] = React.useState([])

    React.useEffect(() => {
        api.getInitialCards()
            .then(cards => {
                setCards(cards)
            })
    }, [])

    React.useEffect(() => {
        api.getUserInfo()
            .then(user => {
                setUserName(user.name)
                setUserDescription(user.about)
                setUserAvatar(user.avatar)
            })
    }, [])

    return (
        <main className="main">
            <section className="profile">
                <button className="profile__avatar-box" onClick={props.onEditAvatar}>
                    <img className="profile__avatar" src={userAvatar} alt="Аватар" />
                </button>
                <div className="profile__info">
                    <h1 className="profile__name">{userName}</h1>
                    <button className="profile__edit-button" type="button" aria-label="Открыть" onClick={props.onEditProfile}></button>
                    <p className="profile__about">{userDescription}</p>
                </div>
                <button className="profile__add-button" type="button" aria-label="Открыть" onClick={props.onAddPlace}></button>
            </section>

            <section className="elements">
                {
                    cards.map(card => (
                        <Card card={card} onCardClick={props.onCardClick} />
                    ))
                }
            </section>
        </main>
    )
}

export default Main