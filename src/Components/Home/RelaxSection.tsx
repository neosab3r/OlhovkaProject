import React, {FC} from "react";

import "../../Styles/Home/RelaxSection.css"

const RelaxSection: FC = () => {
    return (
        <div className="about-relax-container">
            <div className="about-relax-grid">
                <div className="about-relax-left">
                    <div className="about-relax">Отдых в санатории</div>
                    <p className="about-relax-big-text">Отдых для вашего здоровья и удовольствия!</p>
                    <div className="about-relax-default-text">
                        <p>
                            К вашим услугам:
                            <p style={{margin: "20px 0px"}}>
                                Бильярд, бассейн, сауна,
                            </p>
                            <p style={{margin: "15px 0px"}}>
                                тренажерный зал, настольный теннис.
                            </p>
                            <p style={{margin: "25px 0px", fontSize: "1.3rem"}}>
                                Проводятся занятия лечебной физкультуры, аквааэробики, скандинавской ходьбы. В вечернее
                                время - вечера отдыха, конкурсы, спектакли.
                            </p>
                        </p>
                    </div>
                </div>
                <div className="about-relax-right">
                    <img className="about-relax-right-image" src={require("../../Images/HomeImages/bassein.jpg")} alt=""></img>
                    <img className="about-relax-right-image" src={require("../../Images/HomeImages/Builard.jpg")} alt=""></img>
                    <img className="about-relax-right-image" src={require("../../Images/HomeImages/sauna.jpg")} alt=""></img>
                </div>
            </div>
        </div>
    );
}

export default RelaxSection;