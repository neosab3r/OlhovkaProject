import React from "react";
import "../Styles/Header.css";
import { Link } from "react-router-dom";
import LogoImg from "../Images/LogoOlhovka.png";

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="headerTop">
                <Link to="/" style={{textDecoration: 'none', textDecorationColor: 'none'}}>
                <div className="logoContainer">
                    <img src={LogoImg} alt="Logo" width="11%"/>
                    <h1>Санаторий-профилакторий "Ольховка"</h1>
                </div>
                </Link>

            </div>
            <div className="headerBottom">
                <nav className="navigation">
                    <Link to="/routes">Путевки</Link> {/* Используем Link для маршрутизации */}
                    <Link to="/stacionar">Дневной стационар</Link> {/* Используем Link для маршрутизации */}
                    <Link to="/rehabilitation">Реабилитационное лечение</Link> {/* Используем Link для маршрутизации */}
                    <Link to="/doctors">Наши специалисты</Link> {/* Используем Link для маршрутизации */}
                </nav>
            </div>
        </header>
    );
};

export default Header;
