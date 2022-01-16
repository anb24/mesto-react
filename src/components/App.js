import React from "react";
import {useState} from "react";
import {useEffect} from "react";
import api from "../utils/api";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ImagePopup from "./ImagePopup";
import PopupAddCard from "./PopupAddCard";
import PopupEditAvatar from "./PopupEditAvatar";
import PopupEditProfile from "./PopupEditProfile";
//import PopupDeleteCard from "./PopupDeleteCard";
import {userContext} from "../contexts/CurrentUserContext.js";

function App() {
    const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
    const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
    const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState({});
    const [currentUser, setCurrentUser] = useState({});
    const [cards, setCards] = useState([]);

    useEffect(() => {
        api
            .getUserInfo()
            .then((currentUserData) => {
                setCurrentUser(currentUserData);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    useEffect(() => {
        api
            .getCards()
            .then((cards) => {
                setCards(cards);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    function handleCardLike(card) {
        const isLiked = card.likes.some((i) => i._id === currentUser._id);
        api
            .changeCardLike(card._id, isLiked)
            .then((newCardSomeLike) => {
                setCards((state) => state.map((c) => (c._id === card._id ? newCardSomeLike : c)));
            })
            .catch((err) => {
                console.log(err);
            });
    }

    function handleCardDelete(card) {
        api
            .deleteCard(card._id)
            .then(() => {
                setCards((state) => state.filter((c) => c._id !== card._id));
            })
            .catch((err) => {
                console.log(err);
            });
    }

    function handleEditAvatarClick() {
        setEditAvatarPopupOpen(true);
    }
    function handleEditProfileClick() {
        setEditProfilePopupOpen(true);
    }
    function handleAddCardClick() {
        setAddPlacePopupOpen(true);
    }
    function handleCardClick(card) {
        setSelectedCard(card);
    }
    //закрытие попапов
    function closeAllPopups() {
        setEditAvatarPopupOpen(false);
        setEditProfilePopupOpen(false);
        setAddPlacePopupOpen(false);
        setSelectedCard({});
    }

    return (
        <userContext.Provider value={currentUser}>
            <div className="page">
                <div className="page__container">
                    <Header/>
                    <Main
                        cards={cards}
                        onEditProfile={handleEditProfileClick}
                        onAddPlace={handleAddCardClick}
                        onEditAvatar={handleEditAvatarClick}
                        onCardClick={handleCardClick}
                        onCardLike={handleCardLike}
                        onCardDelete={handleCardDelete}
                    />
                    <Footer/>
                    <PopupEditProfile
                        isOpen={isEditProfilePopupOpen}
                        onClose={closeAllPopups}
                    />
                    <PopupAddCard
                        isOpen={isAddPlacePopupOpen}
                        onClose={closeAllPopups}
                    />
                    <PopupEditAvatar
                        isOpen={isEditAvatarPopupOpen}
                        onClose={closeAllPopups}
                    />
                    <ImagePopup
                        card={selectedCard}
                        onClose={closeAllPopups}
                    />
                </div>
            </div>
        </userContext.Provider>
    );
}

export default App;
