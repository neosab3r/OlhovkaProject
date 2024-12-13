import React from "react";
import "../../Styles/DayHospital/DayHospitalPage.css";
import DayHospitalPriceSection from "./DayHospitalPriceSection";
import DayHospitalAbout from "./DayHospitalAbout";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Pagination} from "swiper/modules";

//Дневной стационар

const dayHospitalPrices = [
    {
        name: "Дневной стационар (комплекс медицинских услуг по лечению продолжительностью 10 дней)", price: "7 500,00"
    },
    {
        name: "Дневной стационар (комплекс медицинских услуг по лечению продолжительностью 10 дней)", price: "21 000,00"
    }
];

const sanatoriumPrices = [
    {
        name: "Курсовое лечение (курсовка)", unit: "1 пациенто-день", price: "2 100,00"
    }
];

const DayHospitalImages = [
    require("../../Images/DayHospitalImages/DayHospital (2).jpg"),
    require("../../Images/DayHospitalImages/DayHospital (3).jpg"),
    require("../../Images/DayHospitalImages/DayHospital (4).jpg"),
    require("../../Images/DayHospitalImages/DayHospital (5).jpg"),
    require("../../Images/DayHospitalImages/DayHospital (6).jpg"),
]

const DayHospitalPage: React.FC = () => {
    return (
        <div className={"day-hospital-content"}>
            <Swiper
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, Pagination]}
                className="slider-section-swiper"
                
                style={{height: "600px"}}
            >
                {/*передаем путь изображений из массива paths и создаем блоки <SwiperSlide> с блоком <img> внутри*/}
                {DayHospitalImages.map((image, index) => (
                    <SwiperSlide key={image}></SwiperSlide>
                ))}
            </Swiper>
            <DayHospitalAbout/>
            <DayHospitalPriceSection hospitalPrices={dayHospitalPrices} sanatoriumPrices={sanatoriumPrices}/>
        </div>
    );
}

export default DayHospitalPage;
