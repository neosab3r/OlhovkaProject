import React from "react";
import "../Styles/Header.css";

import { Link } from "react-router-dom";

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="header-top">
                <Link className="header-top-home-link" to="/">
                    <div className="logoContainer">
                        <img src={require("../Images/LogoOlhovka.png")} alt="Logo"/>
                            <h1>Санаторий-профилакторий "Ольховка"</h1>
                    </div>
                </Link>
            </div>
            <div className="header-bottom">
                <nav className="navigation"> {/* Используем Link для маршрутизации */}
                    <Link to="/routes">Путевки</Link>
                    <Link to="/stacionar">Дневной стационар</Link>
                    <Link to="/rehabilitation">Реабилитационное лечение</Link>
                    <Link to="/doctors">Наши специалисты</Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
