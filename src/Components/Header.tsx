import React from "react";
import "../Styles/Header.css"
import {Link} from "react-router-dom";

import LogoImg from "../Images/LogoOlhovka.png";

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="headerTop">
                <div className="logoContainer">
                    <img src={LogoImg} alt="Logo"/>
                    <h1>Санаторий-профилакторий "Ольховка"</h1>
                </div>
            </div>
            <div className="headerBottom">
                <nav className="navigation">
                    <a href="#tours ">Путевки</a>
                    <Link to="DayStacionar">Дневной стационар</Link>
                    <a href="#contacts">Реабилитационный центр</a>
                    <a href="#contacts">Врачи</a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
