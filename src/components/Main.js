import React from "react";
import Card from "./Card.js";
const userContext = React.createContext();

function Main() {

    return (
        <main className="content">
            <section className="profile">
                <div className="profile__avatar-container">
                    <img src="#" className="profile__avatar" alt="Аватарка"/>
                </div>
                <div className="profile__content">
                    <div className="profile__info">
                        <h1 className="profile__name"></h1>
                        <button type="button" className="profile__edit-btn profile__edit-btn_open"
                                aria-label="Ред."></button>
                        <p className="profile__description"></p>
                    </div>
                    <button type="button" className="profile__add-btn" aria-label="Добавить"></button>
                </div>
            </section>
            <section className="elements"></section>
        </main>
    );
}

export default Main;