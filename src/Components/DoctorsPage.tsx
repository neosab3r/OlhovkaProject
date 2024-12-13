import React from "react";
import "../Styles/DoctorsPage.css";

//Наши специалисты

const doctorsArray = [
    { name: 'Имя Фамилия 1', img: require("../Images/Doctors/Doctor-1.png"), specialty: 'Вытяжка позвоночника' },
    { name: 'Имя Фамилия 2', img: require("../Images/Doctors/Doctor-2.png"), specialty: 'Массаж' },
    { name: 'Имя Фамилия 3', img: require("../Images/Doctors/Doctor-3.png"), specialty: 'Процедурный кабинет' },
    { name: 'Имя Фамилия 1', img: require("../Images/Doctors/Doctor-1.png"), specialty: 'Вытяжка позвоночника' },
    { name: 'Имя Фамилия 2', img: require("../Images/Doctors/Doctor-2.png"), specialty: 'Массаж' },
    { name: 'Имя Фамилия 3', img: require("../Images/Doctors/Doctor-3.png"), specialty: 'Процедурный кабинет' },
    { name: 'Имя Фамилия 1', img: require("../Images/Doctors/Doctor-1.png"), specialty: 'Вытяжка позвоночника' },
    { name: 'Имя Фамилия 2', img: require("../Images/Doctors/Doctor-2.png"), specialty: 'Массаж' },
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
                            <p>{doctor.specialty}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DoctorsPage;
