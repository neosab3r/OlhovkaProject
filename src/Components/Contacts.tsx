import React from "react";
import "../Styles/Contacts.css";
import vkLogoLink from "../Images/vk-Link.png";
import MapWidget from "./Widgets/MapWidget";
import ReviewsWidget from "./Widgets/ReviewsWidget";

const Contacts: React.FC = () => {
    return (
        <div className="Contacts-container">
            <div className="left-column">
                <MapWidget />
                    <p className="CompanyName">
                        ООО "СП "Ольховка" © 2020-2024
                    </p>
            </div>
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
                        href="https://vk.com/sanatoryi_olhovka"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src={vkLogoLink} className="VkLink" alt="VK Link" />
                    </a>
                </p>
                <ReviewsWidget />
            </div>
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
    );
};

export default Contacts;
