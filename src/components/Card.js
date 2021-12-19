import React from "react";

function Card({card, onCardClick}) {

    function handleClick() {
        onCardClick(card);
    }

    return (<div id="card-template">
        <article className="element">
            <button type="button" className="element__delete" aria-label="Удалить"/>
            <img src={`${card.link}`} className="element__image" alt={`${card.name}`} onClick={handleClick}/>
            <div className="element__group">
                <h2 className="element__title">{card.name}</h2>
                <div className="element__box-likes">
                    <button type="button" className="element__like" aria-label="Нравится"/>
                    <p className="element__sum-likes">{card.likes.length}</p>
                </div>
            </div>
        </article>
    </div>);
}

export default Card;