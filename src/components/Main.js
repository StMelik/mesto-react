import React from "react"
import { optionsApi } from "../utils/optionsApi"
import Api from "../utils/Api"
import Card from "./Card"
// import noAvatar from '../images/no-avatar.png'
import { CurrentUserContext } from "../contexts/CurrentUserContext"

const api = new Api(optionsApi)

function Main(props) {
    const [cards, setCards] = React.useState([])
    const currentUser = React.useContext(CurrentUserContext)

    React.useEffect(() => {
        api.getInitialCards()
            .then(cards => {
                setCards(cards)
            })
    }, [])

    function handleCardLike(card) {
        const isLiked = card.likes.some(i => i._id === currentUser._id);

        api.changeLikeCardStatus(card._id, !isLiked)
            .then(newCard => {
                setCards(state => state.map(c => c._id === card._id ? newCard : c));
            });
    }

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
                    cards.map(card => (
                        <Card
                            card={card}
                            onCardClick={props.onCardClick}
                            onCardLike={handleCardLike}
                        />
                    ))
                }
            </section>
        </main>
    )
}

export default Main