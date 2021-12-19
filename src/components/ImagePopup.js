import '../blocks/popup/popup.css';
import '../blocks/popup/_type_img/popup_type_img.css';
import '../blocks/popup/__container/popup__container.css';
import '../blocks/popup/__container/_type_image/popup__container_type_image.css';
import '../blocks/popup/__close/popup__close.css';
import '../blocks/popup/__card-photo/popup__card-photo.css';
import '../blocks/popup/__title-photo/popup__title-photo.css';

function ImagePopup() {

    return (
        <div className="popup popup_type_img" id="card-img">
            <div className="popup__container popup__container_type_image">
                <button type="button" className="popup__close" aria-label="Закрыть"></button>
                <img src="#" className="popup__card-photo" alt="#"/>
                    <p className="popup__title-photo"></p>
            </div>
        </div>
    );
}

export default ImagePopup;