import React from "react"
import Api from "../utils/Api"
import { optionsApi } from "../utils/constants"


function Main(props) {

    const [userName, setUserName] = React.useState('Загрузка ...')
    const [userDescription, setUserDescription] = React.useState('Загрузка ...')
    const [userAvatar, setUserAvatar] = React.useState("images/no-avatar.png")

    const api = new Api(optionsApi)

    React.useEffect(() => {
        api.getUserInfo()
            .then(res => {
                // console.log(res);
                setUserName(res.name)
                setUserDescription(res.about)
                setUserAvatar(res.avatar)
            })
    })

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
            </section>
        </main>
    )
}

export default Main