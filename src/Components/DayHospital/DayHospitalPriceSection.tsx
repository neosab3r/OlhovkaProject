import React, {FC} from "react";
import "../../Styles/DayHospital/DayHospitalPriceSection.css";

interface DayHospitalProps {
    hospitalPrices : DayHospitalPricesProps [];
    sanatoriumPrices : SanatoriumPricesProps [];
}

interface DayHospitalPricesProps {
    name: string;
    price: string;
}

interface SanatoriumPricesProps {
    name: string;
    unit: string;
    price: string;
}

const DayHospitalPriceSection: FC<DayHospitalProps>  = (props) => {
    return (
        <div className="price-list-container">
            <h2>Прейскурант цен на комплекс медицинских услуг "Дневной стационар" с 01.01.2024 года</h2>
            <table className="price-table">
                <thead>
                <tr>
                    <th>Наименование услуги</th>
                    <th>Стоимость 1 услуги (руб. НДС не облагается)</th>
                </tr>
                </thead>
                <tbody>
                {props.hospitalPrices.map((service, index) => (
                    <tr key={index}>
                        <td>{service.name}</td>
                        <td>{service.price}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            <h2>Прейскурант на санаторно-курортное лечение, оформленное бланком курсовки с 01.06.2024 года*</h2>
            <table className="price-table">
                <thead>
                <tr>
                    <th>Наименование услуги</th>
                    <th>Единица измерения</th>
                    <th>Стоимость (руб. НДС не облагается)</th>
                </tr>
                </thead>
                <tbody>
                {props.sanatoriumPrices.map((service, index) => (
                    <tr key={index}>
                        <td>{service.name}</td>
                        <td>{service.unit}</td>
                        <td>{service.price}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            <p className="Table-clarification">
                * В стоимость входят медицинские улуги по показаниям
            </p>
        </div>
    );
}

export default DayHospitalPriceSection;