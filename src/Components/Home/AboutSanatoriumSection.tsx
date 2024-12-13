import React, {FC} from "react";
import "../../Styles/Home/AboutSanatoriumSection.css"

const AboutSanatoriumSection: FC = () => {
    return (
        <div className="about-container">
            <div className="about-description-grid">
                <div className="about-description-left">
                    <div className="about-sanatorium">О санатории</div>
                    <p className="about-sanatorium-big-text">Восстановите здоровье в самом сердце природы!</p>
                    <div className="about-sanatorium-default-text">
                        <p>
                            Санаторий-профилакторий «Ольховка» располагается в самом «сердце» лесного массива, в экологически чистой зоне г. Стерлитамака Республики Башкортостан и в доступности общественного транспорта.
                        </p>
                        <p>
                            Территория профилактория состоит из четырехэтажного здания спального, лечебного, спортивного корпусов и здания столовой. Также на территории санатория располагается собственная котельная, созданная для поддержания оптимальной температуры в стенах здравницы вне зависимости от перемены погодных условий.
                        </p>
                    </div>
                </div>
                <div className="about-description-right">
                    <img className={"about-sanatorium-right-image"} src={require("../../Images/HomeImages/SliderImages/4.jpg")} alt=""></img>
                </div>
            </div>
        </div>
    );
}

export default AboutSanatoriumSection;
