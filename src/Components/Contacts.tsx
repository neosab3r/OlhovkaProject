import React from "react";
import "../Styles/Contacts.css";
import vkLogoLink from "../Images/vk-Link.png";
import MapWidget from "./Widgets/MapWidget";
import ReviewsWidget from "./Widgets/ReviewsWidget";

const Contacts: React.FC = () => {
    return (
        <div className="contacts-container">
            <div className="left-column">
                <MapWidget />
                    <p className="CompanyName">
                        ООО "СП "Ольховка" © 2020-2024
                    </p>
            </div>
            <div className="right-column">
                <p className="place-info">
                    453115, Республика Башкортостан, г. Стерлитамак, Ольховка
                </p>
                <p className="registry-container">
                    Регистратура<br/><br/>
                    +7 (3473) 29-58-13
                </p>
                <p className="reception-container">
                    Ресепшн <br/><br/>
                    +7 (3473) 29-58-12<br/><br />
                    <a
                        className="vk-link"
                        href="https://vk.com/sanatoryi_olhovka"
                        target="_blank"
                        rel="noreferrer">
                        <img src={vkLogoLink} className="vkLogo-link" alt="VK Link" />
                    </a>
                </p>
                <ReviewsWidget />
            </div>
                <p className="developer-name">
                    <a
                        href="https://github.com/BeeGood-LTD"
                        target="_blank"
                        rel="noreferrer"
                        className="developer-link">
                        by: BeeGood
                    </a>
                </p>

        </div>
    );
};

export default Contacts;
