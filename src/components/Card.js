function Card(props) {
    return (
        <article className="elements__element element" key={props.card._id}>
            <button className="element__delete" type="button" aria-label="Удалить"></button>
            <img className="element__image" src={props.card.link} alt={props.card.name} />
            <div className="element__bottom">
                <h2 className="element__title">{props.card.name}</h2>
                <div className="element__heart-box">
                    <button className="element__heart-icon" type="button" aria-label="Понравилось"></button>
                    <p className="element__heart-value">{props.card.likes.length}</p>
                </div>
            </div>
        </article>
    )
}

export default Card