import React, {FC} from "react";
import {Link} from "react-router-dom";

const DayStacionar:FC = () => {
    return (
        <header className="header">
            <div className="logo">
                <h1>Санаторий-профилакторий "Ольховка"</h1>
            </div>
            <nav className="navigation">
                {/*<a href="#tours ">Путевки</a>*/}
                <Link to="DayStacionar">Дневной стационар</Link>
                {/*<a href="#contacts">Реабилитационный центр</a>*/}
            </nav>
            <div className="contact-info">
                <span>8 (800) 300-68-28</span>
            </div>
        </header>
    );
};

export default DayStacionar;
