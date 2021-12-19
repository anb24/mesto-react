import React from "react";
import PopupWithForm from "./PopupWithForm"

function PopupDeleteCard({isOpen, onClose}) {

    return (<PopupWithForm
        title="Вы уверены?"
        name="card-delete"
        buttonTitle="Да"
        isOpen={isOpen}
        onClose={onClose}
    />);
}

export default PopupDeleteCard;