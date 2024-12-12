import React, {FC} from "react";
import "../../Styles/Home/PlacementRoomSection.css";

const PlacementRoomSection: FC = () => {
    return (
        <div className="about-placement-container">
            <div className="about-placement-grid">
                <div className="about-placement-left">
                    <div className="about-placement">Размещение</div>
                    <p className="about-placement-big-text">Уютные номера для комфортного отдыха</p>
                    <p className="about-placement-default-text">
                        <p>Стандартный номер</p>
                         - Уютный двухместный номер со всеми удобствами.
                        <p>Номер повышенной комфортности</p>
                         - Дополнительный комфорт для вашего отдыха.
                    </p>
                </div>
                <div className="about-placement-right">
                    <p className="about-placement-default-text">
                        В каждом номере: уютная мебель, спутниковое телевидение, холодильник, ванна/душевая кабина,
                        туалет, полотенца, Wi-fi. Охраняемая территория и автостоянка.
                    </p>
                    <p className="about-placement-default-text">
                        Санаторий расчитан на - 160 чел.
                    </p>
                </div>
            </div>
            <div className="about-placement-room-container">
                <img src={require("../../Images/HomeImages/RoomPlacementjpg.jpg")} alt="room-placement-image"/>
            </div>
        </div>
    );
}

export default PlacementRoomSection;