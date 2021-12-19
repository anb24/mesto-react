import React from "react";
import PopupWithForm from "./PopupWithForm.js";

function PopupEditProfile({isOpen, onClose}) {

    return (<PopupWithForm
        title="Редактировать профиль"
        name="edit"
        buttonTitle="Сохранить"
        isOpen={isOpen}
        onClose={onClose}
    >
        <fieldset className="popup__form">
            <input
                id="name"
                type="text"
                name="name"
                placeholder="Имя"
                className="popup__text popup__text_type_name"
                required
                minLength="2"
                maxLength="40"
            />
            <span id="name-error" className="popup__error"/>
            <input
                id="comment"
                type="text"
                name="about"
                placeholder="О себе"
                className="popup__text popup__text_type_comment"
                required
                minLength="2"
                maxLength="200"
            />
            <span id="comment-error" className="popup__error"/>
        </fieldset>
    </PopupWithForm>);
}

export default PopupEditProfile;