import React from "react";
import "../Styles/DayHospitalPage.css";

const dayHospitalPrices = [
    {
        name: "Дневной стационар (комплекс медицинских услуг по лечению продолжительностью 10 дней)",
        price: "7 500,00"
    },
    {
        name: "Дневной стационар (комплекс медицинских услуг по лечению продолжительностью 10 дней)",
        price: "21 000,00"
    }
];

const sanatoriumPrices = [
    {
        name: "Курсовое лечение (курсовка)",
        unit: "1 пациенто-день",
        price: "2 100,00"
    }
];

const DayHospitalPage: React.FC = () => {
    return (
        <div className="DayHospital-container">
            <h2>Прейскурант цен на комплекс медицинских услуг "Дневной стационар" с 01.01.2024 года</h2>
            <table className="price-table">
                <thead>
                <tr>
                    <th>Наименование услуги</th>
                    <th>Стоимость 1 услуги (руб. НДС не облагается)</th>
                </tr>
                </thead>
                <tbody>
                {dayHospitalPrices.map((service, index) => (
                    <tr key={index}>
                        <td>{service.name}</td>
                        <td>{service.price}</td>
                    </tr>
                ))}
                </tbody>
            </table>

            <h2>Прейскурант на санаторно-курортное лечение, оформленное бланком курсовки с 01.06.2024 года</h2>
            <table className="price-table">
                <thead>
                <tr>
                    <th>Наименование услуги</th>
                    <th>Единица измерения</th>
                    <th>Стоимость (руб. НДС не облагается)</th>
                </tr>
                </thead>
                <tbody>
                {sanatoriumPrices.map((service, index) => (
                    <tr key={index}>
                        <td>{service.name}</td>
                        <td>{service.unit}</td>
                        <td>{service.price}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default DayHospitalPage;
