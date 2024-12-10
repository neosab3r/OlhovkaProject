import React from "react";
import "../Styles/Header.css";

import { Link } from "react-router-dom";

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="headerTop">
                <div className="logoContainer">
                    <img src={require("../Images/LogoOlhovka.png")} alt="Logo"/>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <h1>Санаторий-профилакторий "Ольховка"</h1>
                    </Link>
                </div>

            </div>
            <div className="headerBottom">
                <nav className="navigation">
                    <Link to="/tours">Путевки</Link> {/* Используем Link для маршрутизации */}
                    <Link to="/daystacionar">Дневной стационар</Link> {/* Используем Link для маршрутизации */}
                    <Link to="/rehabilitation">Реабилитационный центр</Link> {/* Используем Link для маршрутизации */}
                    <Link to="/doctors">Наши специалисты</Link> {/* Используем Link для маршрутизации */}
                </nav>
            </div>
        </header>
    );
};

export default Header;
