import React from "react";
import "../Styles/DoctorsPage.css";

import Doctor_1_img from '../Images/Doctors/Doctor-1.png';
import Doctor_2_img from '../Images/Doctors/Doctor-2.png';
import Doctor_3_img from '../Images/Doctors/Doctor-3.png';

const doctorsArray = [
    { name: 'Имя Фамилия 1', img: Doctor_1_img, specialty: 'Вытяжка позвоночника' },
    { name: 'Имя Фамилия 2', img: Doctor_2_img, specialty: 'Массаж' },
    { name: 'Имя Фамилия 3', img: Doctor_3_img, specialty: 'Процедурный кабинет' },
];


const DoctorsPage: React.FC = () => {
    return (
        <div className="Doctors-container">
            <h2>Наши специалисты</h2>
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
    );
};

export default DoctorsPage;
