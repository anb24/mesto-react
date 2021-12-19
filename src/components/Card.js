import React from "react";
const userContext = React.createContext();

function Card() {

    return (
        <template id="card-template">
            <article className="element">
                <button type="button" className="element__delete" aria-label="Удалить"></button>
                <img src="#" className="element__image" alt="фото"/>
                    <div className="element__group">
                        <h2 className="element__title"></h2>
                        <div className="element__box-likes">
                            <button type="button" className="element__like" aria-label="Нравится"></button>
                            <p className="element__sum-likes"></p>
                        </div>
                    </div>
            </article>
        </template>
    );
}

export default Card;