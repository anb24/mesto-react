import React from "react";
import PopupWithForm from "./PopupWithForm.js";

function PopupEditAvatar({isOpen, onClose}) {

    return (<PopupWithForm
        title="Обновить аватар"
        name="edit-avatar"
        isOpen={isOpen}
        onClose={onClose}
        buttonTitle="Сохранить"
    >
        <fieldset className="popup__form">
            <input
                id="popupLinkPhotoAvatar"
                autocomplete="off"
                type="url"
                name="link"
                placeholder="Ссылка на фото профиля"
                className="popup__text popup__text_type_comment"
                required
            />
            <span id="popupLinkPhotoAvatar-error" className="popup__error"/>
        </fieldset>
    </PopupWithForm>);
}

export default PopupEditAvatar;