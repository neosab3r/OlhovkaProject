import React from "react";
import "../Styles/DoctorsPage.css";

//Наши специалисты

const doctorsArray = [
    {
        name: 'Имя Фамилия 1',
        img: require("../Images/Doctors/Doctor-1.png"),
        specialty: 'Вытяжка позвоночника',
        description: 'Массаж представляет собой механическое воздействие на мягкие ткани тела, включая мышцы, ' +
            'связки и суставы. Эта процедура способствует улучшению кровообращения, снятию мышечного напряжения ' +
            'и уменьшению болевых ощущений. '
    },
    {
        name: 'Имя Фамилия 2',
        img: require("../Images/Doctors/Doctor-2.png"),
        specialty: 'Массаж',
        description: 'Массаж представляет собой механическое воздействие на мягкие ткани тела, включая мышцы, ' +
            'связки и суставы. Эта процедура способствует улучшению кровообращения, снятию мышечного напряжения ' +
            'и уменьшению болевых ощущений. '
    },
    {
        name: 'Имя Фамилия 3',
        img: require("../Images/Doctors/Doctor-3.png"),
        specialty: 'Процедурный кабинет',
        description: 'Массаж представляет собой механическое воздействие на мягкие ткани тела, включая мышцы, ' +
            'связки и суставы. Эта процедура способствует улучшению кровообращения, снятию мышечного напряжения ' +
            'и уменьшению болевых ощущений. '
    },
    {
        name: 'Имя Фамилия 1',
        img: require("../Images/Doctors/Doctor-1.png"),
        specialty: 'Вытяжка позвоночника',
        description: 'Массаж представляет собой механическое воздействие на мягкие ткани тела, включая мышцы, ' +
            'связки и суставы. Эта процедура способствует улучшению кровообращения, снятию мышечного напряжения ' +
            'и уменьшению болевых ощущений. '
    },
    {
        name: 'Имя Фамилия 2',
        img: require("../Images/Doctors/Doctor-2.png"),
        specialty: 'Массаж',
        description: 'Массаж представляет собой механическое воздействие на мягкие ткани тела, включая мышцы, ' +
            'связки и суставы. Эта процедура способствует улучшению кровообращения, снятию мышечного напряжения ' +
            'и уменьшению болевых ощущений. '
    },
    {
        name: 'Имя Фамилия 3',
        img: require("../Images/Doctors/Doctor-3.png"),
        specialty: 'Процедурный кабинет',
        description: 'Массаж представляет собой механическое воздействие на мягкие ткани тела, включая мышцы, ' +
            'связки и суставы. Эта процедура способствует улучшению кровообращения, снятию мышечного напряжения ' +
            'и уменьшению болевых ощущений. '
    }
];


const DoctorsPage: React.FC = () => {
    return (
        <div className="DoctorsPageGeneral">
            <h1>Наши специалисты</h1>
            <div className="Doctors-container">
                <div className="doctors-grid">
                    {doctorsArray.map((doctor, index) => (
                        <div className="doctor-card" key={index}>
                            <img src={doctor.img} className="doctor-image"/>
                            <h3>{doctor.name}</h3>
                            <p className="doctor-card-specialty">{doctor.specialty}</p>
                            <p className="doctor-card-description">{doctor.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DoctorsPage;
