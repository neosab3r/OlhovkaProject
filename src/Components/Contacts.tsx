import React from "react";
import "../Styles/Contacts.css";
import vkLogoLink from "../Images/vk-Link.png";
import MapWidget from "./Widgets/MapWidget";
import ReviewsWidget from "./Widgets/ReviewsWidget";

const Contacts: React.FC = () => {
    return (
        <div className="Contacts-container">
            <MapWidget />
            <p className="CompanyName">
                ООО "СП "Ольховка" Ⓒ 2020-2024
            </p>
            <div className="right-column">
                <p className="PlaceInfo">
                    453115, Республика Башкортостан, г. Стерлитамак, Ольховка
                </p>

                <p className="Registry">
                    <br />
                    Регистратура
                    <br /><br />
                    +7 (3473) 29-58-13
                </p>
                <p className="Reception">
                    Ресепшн
                    <br /><br />
                    +7 (3473) 29-58-12
                    <br /><br />
                    <a
                        className="vkLink"
                        href="https://vk.com/sanatoryi_olhovka?z=photo-109953255_457241496%2Falbum-109953255_0%2Frev"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src={vkLogoLink} className="VkLink" alt="VK Link" />
                    </a>
                </p>
                <ReviewsWidget />

                <p className="DeveloperName">
                    <a
                        href="https://github.com/BeeGood-LTD"
                        target="_blank"
                        rel="noreferrer"
                        className="DeveloperLink"
                    >
                        by: BeeGood
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Contacts;
