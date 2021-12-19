import React from "react";
import PopupWithForm from "./PopupWithForm"

function PopupAddCard({isOpen, onClose}) {

    return (<PopupWithForm
        title="Новое место"
        name="card"
        buttonTitle="Создать"
        isOpen={isOpen}
        onClose={onClose}
    >
        <fieldset className="popup__form">
            <input
                id="popupNamePhoto"
                type="text"
                name="name"
                placeholder="Название"
                className="popup__text popup__text_type_name"
                minLength="2"
                maxLength="30"
                required
            />
            <span id="popupNamePhoto-error" className="popup__error"/>
            <input
                id="popupLinkPhoto"
                name="link"
                type="url"
                placeholder="Ссылка на картинку"
                className="popup__text popup__text_type_comment"
                required
            />
            <span id="popupLinkPhoto-error" className="popup__error"/>
        </fieldset>
    </PopupWithForm>);
}

export default PopupAddCard;