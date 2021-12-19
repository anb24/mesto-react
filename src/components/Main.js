import React from "react";
import {useState} from "react";
import {useEffect} from "react";
import Card from "./Card.js";
import api from "../utils/api";

function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick,}) {

    const [data, setUserInfo] = useState({userName: "", userDescription: "", userAvatar: ""});
    const [cards, setCards] = useState([]);
    useEffect(() => {
        Promise.all([api.getUserInfo(), api.getCards()])
            .then(([data, cards]) => {
                setUserInfo({
                    userName: data.name,
                    userDescription: data.about,
                    userAvatar: data.avatar,
                });
                setCards(cards);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (<main className="content">
        <section className="profile">
            <div className="profile__avatar-container">
                <img src={data.userAvatar} className="profile__avatar" alt="Аватарка" onClick={onEditAvatar}/>
            </div>
            <div className="profile__content">
                <div className="profile__info">
                    <h1 className="profile__name">{data.userName}</h1>
                    <button type="button" className="profile__edit-btn profile__edit-btn_open"
                            aria-label="Ред." onClick={onEditProfile}/>
                    <p className="profile__description">{data.userDescription}</p>
                </div>
                <button type="button" className="profile__add-btn" aria-label="Добавить" onClick={onAddPlace}/>
            </div>
        </section>
        <section className="elements">
            {cards.map((card) => {
                return (<Card
                    card={card}
                    onCardClick={onCardClick}
                />);
            })}
        </section>
    </main>);
}

export default Main;