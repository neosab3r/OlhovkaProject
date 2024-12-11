import React from "react";
import "../Styles/Routes.css";

const priceList = [
    {
        category: "Корпус №1",
        services: [
            { name: "Стандартный 2-х местный (1 койко-место)", price: "4400", discountPrice: "3280" },
            { name: "Стандартный 2-х местный (1 койко-место, без подселения)", price: "4850", discountPrice: "" },
            { name: "Стандартный 2-х местный (1 койко-место для льготников**)", price: "2900", discountPrice: "" },
            { name: "Однокомнатный номер \"Комфорт\" №425, 426, 427", price: "4850", discountPrice: "" },
            { name: "Стоимость путевки на 2-го человека", price: "4400", discountPrice: "" },
        ],
    },
    {
        category: "Корпус №2",
        services: [
            { name: "Двухкомнатный номер \"Комфорт +\" №428, 429", price: "5736", discountPrice: "3280" },
            { name: "Стоимость путевки на 2-го человека", price: "4400", discountPrice: "" },
            { name: "Однокомнатный номер №№ 205, 207, 209, 211", price: "5736", discountPrice: "3280" },
            { name: "Стоимость путевки на второго и последующих детей", price: "4400", discountPrice: "" },
            { name: "Двухкомнатный номер №№ 202, 204, 206, 208", price: "6155", discountPrice: "3280" },
            { name: "Стоимость путевки на второго человека", price: "4400", discountPrice: "" },
        ],
    },
    {
        category: "Дополнительные услуги",
        services: [
            { name: "Размещение без подселения (доплата)", price: "450", discountPrice: "" },
            { name: "Размещение в однокомнатном номере \"Комфорт\" (доплата)", price: "450", discountPrice: "" },
            { name: "Размещение в двухкомнатном номере \"Комфорт +\" (доплата)", price: "1300", discountPrice: "" },
        ],
    },
    {
        category: "Новая таблица",
        services: [
            { name: "Стандартный 2-х местный (1 койко-место)", price: "6000", discountPrice: "" },
            { name: "Стандартный 2-х местный (1 койко-место без подселения)", price: "6450", discountPrice: "" },
            { name: "Однокомнатный номер \"Комфорт\" №425, 426, 427", price: "6450", discountPrice: "" },
            { name: "Стоимость путевки на 2-го человека", price: "6000", discountPrice: "" },
            { name: "Двухкомнатный номер \"Комфорт +\" №428, 429", price: "7336", discountPrice: "" },
            { name: "Стоимость путевки на 2-го человека", price: "6000", discountPrice: "" },
            { name: "Однокомнатный номер №№ 205, 207, 209, 211", price: "7336", discountPrice: "" },
            { name: "Стоимость путевки на второго и последующих детей", price: "6000", discountPrice: "" },
            { name: "Двухкомнатный номер №№ 202, 204, 206, 208", price: "7755", discountPrice: "" },
            { name: "Стоимость путевки на второго человека", price: "6000", discountPrice: "" },
        ],
    },
];

const RoutesPage: React.FC = () => {
    return (
        <div className="Routes-container">
            <h2>Прейскурант цен на санаторно-курортное лечение, оформленное бланком путевки и медицинскую реабилитацию в ООО "СП "Ольховка" с 01.09.2024 года*</h2>
            {priceList.map((category, categoryIndex) => (
                <div key={categoryIndex}>
                    <h3>{category.category}</h3>
                    <table className="price-table">
                        <thead>
                        <tr>
                            <th>Категория номеров/услуга</th>
                            <th>Стоимость 1 к/дня (руб. НДС не облагается)</th>
                            <th>Стоимость 1 к/дня для детей (руб. НДС не облагается) 3-14 лет</th>
                        </tr>
                        </thead>
                        <tbody>
                        {category.services.map((service, serviceIndex) => (
                            <tr key={serviceIndex}>
                                <td>{service.name}</td>
                                <td>{service.price}</td>
                                <td>{service.discountPrice}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            ))}
            <p className="note">* В стоимость услуги входит лечение, проживание и питание.</p>
            <p className="note">** Льготная категория лиц, заключающая договор, оплачивает 70% от указанной стоимости.</p>
            <p className="note">*** Льготы на путевки при проживании в корпусе №2 не предоставляются.</p>
        </div>
    );
};

export default RoutesPage;
