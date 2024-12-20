import React from "react";
import "../../../Styles/Rehabilitation/ProceduresStyles/procedureOneExtension.css";



const GALLERY_IMAGES = [
    require("../../../Images/RehabilitationProcedures/Gallery/gallery (1).jpg"),
    require("../../../Images/RehabilitationProcedures/Gallery/gallery (1).jpg"),
    require("../../../Images/RehabilitationProcedures/Gallery/gallery (1).jpg"),
    require("../../../Images/RehabilitationProcedures/Gallery/gallery (1).jpg"),
    require("../../../Images/RehabilitationProcedures/Gallery/gallery (1).jpg"),
    require("../../../Images/RehabilitationProcedures/Gallery/gallery (1).jpg")
];

const CryoTherapyPage = () => {
    return (
        <div className="ProcedureContainer">
            <h2 style={{ fontSize: "1.44rem"}}>Artronom S3</h2>
            <div className="procedure-card-padding-container">
                <div className="procedure-grid">
                    <div className="procedure-card">
                        <div className="procedure-text">
                            <p style={{ fontSize: "1.4rem"}}>
                                Уникальный тренажер для восстановления объема движений плечевого сустава. Применяется для механотерапии плечевого сустава
                                в реабилитационных центрах и санаториях. Безопасная, безболезненная и дозированная разработка суставов взрослых и детей с
                                соблюдением всей биомеханики и анатомии тела человека, в соответствии с международным PNF стандартом. В процессе применения
                                тренажер гарантирует анатомически правильные движения плечевого сустава, обеспечивая наилучший результат механотерапии.
                                Применение аппарата показано после операций и травм.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <h2 style={{ fontSize: "1.44rem"}}>Галерея</h2>
            <div className="gallery-container">
                {GALLERY_IMAGES.map((image, index) => (
                    <img key={index} src={image} alt={`Gallery ${index}`} className="gallery-image" />
                ))}
            </div>
        </div>
    );
};

export default CryoTherapyPage;
