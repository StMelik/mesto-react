import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card(props) {

    const currentUser = React.useContext(CurrentUserContext)

    const isOwn = props.card.owner._id === currentUser._id;
    const isLiked = props.card.likes.some(i => i._id === currentUser._id)

    const cardDeleteButtonClassName = (
        `element__delete 
        ${isOwn ?
            'element__delete_visible' :
            'element__delete_hidden'}`
    )

    const cardLikeButtonClassName = (
        `element__heart-icon
        ${isLiked ?
            'element__heart-icon_active' :
            ''}`
    );

    function handleClick() {
        props.onCardClick(props.card);
    }

    function handleLikeClick() {
        props.onCardLike(props.card)
    }

    return (
        <article className="elements__element element" key={props.card._id}>
            <button className={cardDeleteButtonClassName} type="button" aria-label="Удалить"></button>
            <img className="element__image" src={props.card.link} alt={props.card.name} onClick={handleClick} />
            <div className="element__bottom">
                <h2 className="element__title">{props.card.name}</h2>
                <div className="element__heart-box">
                    <button className={cardLikeButtonClassName} type="button" aria-label="Понравилось" onClick={handleLikeClick}></button>
                    <p className="element__heart-value">{props.card.likes.length}</p>
                </div>
            </div>
        </article>
    )
}

export default Card