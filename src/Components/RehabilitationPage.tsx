import React from "react";
import "../Styles/RehabilitionPage.css";
import Procedure_1 from '../Images/RehabilitationProcedures/Procedure_1.jpg';
import Procedure_2 from '../Images/RehabilitationProcedures/Procedure_2.jpg';
import Procedure_3 from '../Images/RehabilitationProcedures/Procedure_3.jpg';

const rehabArray = [
    {
        name: 'Артромот S3',
        img: Procedure_1,
        description: (
            <>
                Уникальный тренажер для восстановления объема движений плечевого сустава. Применяется для механотерапии плечевого сустава в реабилитационных центрах и санаториях.
                <br />
                Безопасная, безболезненная и дозированная разработка суставов взрослых и детей с соблюдением всей биомеханики и анатомии тела человека, в соответствии с международным PNF стандартом.
                <br />
                В процессе применения тренажер гарантирует анатомически правильные движения плечевого сустава, обеспечивая наилучший результат механотерапии.
            </>
        ),
    },
    {
        name: 'Карбокситерапия',
        img: Procedure_2,
        description: (
            <>
                Это метод лечения, при котором под кожу вводятся инъекции углекислого газа. Этот метод используется для улучшения кровообращения, уменьшения целлюлита и стимулирования коллагена.
                <br />
                Процедура безболезненна и безопасна, часто применяется в косметологии и дерматологии.
            </>
        ),
    },
    {
        name: 'УВТ (Ультравысокочастотная терапия)',
        img: Procedure_3,
        description: (
            <>
                УВТ (Ультравысокочастотная терапия) - это метод физиотерапии, при котором используются электромагнитные волны высокой частоты для лечения различных заболеваний.
                <br />
                Применяется для лечения воспалительных процессов, улучшения кровообращения и ускорения заживления тканей.
            </>
        ),
    },
];

const priceList = [
    {
        category: "Реабилитационное лечение",
        services: [
            { name: "Аппаратная реабилитация", subcategory: "Карбокситерапия при различных заболеваниях и патологических состояниях", unit: "1 сеанс", price: "1 000,00", discountPrice: "800,00" },
        ],
    },
    {
        category: "Гипо-гипероксическая терапия",
        services: [
            { name: "Гипо-гипероксическая терапия (OXYTERRA) в групповом режиме работы аппарата под компьютерной сенситизацией длительностью до 60 минут", unit: "1 процедура", price: "1 400,00", discountPrice: "1 120,00" },
            { name: "Гипо-гипероксическая терапия (OXYTERRA) в групповом режиме работы аппарата под компьютерной сенситизацией длительностью до 30 минут", unit: "1 процедура", price: "800,00", discountPrice: "640,00" },
            { name: "Гипо-гипероксическая терапия (OXYTERRA) в групповом режиме работы аппарата под компьютерной сенситизацией (курс из 5 процедур) длительностью до 60 минут", unit: "1 курс", price: "6 000,00", discountPrice: "нет данных" },
        ],
    },
    {
        category: "Велоэргометрия (ВЭМ)",
        services: [
            { name: "Велоэргометрия с газоанализатором", unit: "1 процедура", price: "2 000,00", discountPrice: "1 600,00" },
        ],
    },
    {
        category: "Механотерапия на аппарате ARTROMOT",
        services: [
            { name: "Механотерапия на аппарате ARTROMOT (45 мин)", unit: "1 процедура", price: "5 000,00", discountPrice: "4 000,00" },
            { name: "Механотерапия на аппарате ARTROMOT (45 мин), курс из 10 процедур", unit: "1 курс", price: "45 000,00", discountPrice: "нет данных" },
        ],
    },
    {
        category: "Электросветолечение на аппарате BTL-5000",
        services: [
            { name: "BTL-5000 Электростимуляция", unit: "15 мин", price: "200,00", discountPrice: "160,00" },
            { name: "BTL-5000 Ультразвук", unit: "10 мин", price: "150,00", discountPrice: "120,00" },
            { name: "BTL-5000 Магнитотерапия", unit: "15 мин", price: "150,00", discountPrice: "120,00" },
            { name: "BTL-5000 Магнитотерапия", unit: "30 мин", price: "250,00", discountPrice: "200,00" },
            { name: "BTL-5000 Лазеротерапия", unit: "10 мин", price: "1 000,00", discountPrice: "800,00" },
            { name: "BTL-5000 Лазеротерапия", unit: "20 мин", price: "2 000,00", discountPrice: "1 600,00" },
            { name: "BTL-5000 Магнетотерапия", unit: "по сеанс", price: "600,00", discountPrice: "480,00" },
        ],
    },
];

const RehabilitationPage: React.FC = () => {
    return (
        <div className="rehab-container">
            <h2>Реабилитация</h2>
            <div className="rehab-grid">
                {rehabArray.map((rehab, index) => (
                    <div className="rehab-card" key={index}>
                        <img src={rehab.img} className="rehab-image" alt={rehab.name} />
                        <h3>{rehab.name}</h3>
                        <p>{rehab.description}</p>
                    </div>
                ))}
            </div>
            <h2>Прейскурант на медицинские услуги реабилитационного лечения ООО "СП Ольховка" с 01.08.2024 год.</h2>
            <table className="price-table">
                <thead>
                <tr>
                    <th>№ п/п</th>
                    <th>Наименование процедур</th>
                    <th>Единица измерения услуги</th>
                    <th>Стоимость 1-й процедуры (руб. НДС не облагается)</th>
                    <th>*Стоимость 1-й процедуры со скидкой 20% (руб. НДС не облагается)</th>
                </tr>
                </thead>
                <tbody>
                {priceList.map((category, categoryIndex) => (
                    category.services.map((service, serviceIndex) => (
                        <tr key={`${categoryIndex}-${serviceIndex}`}>
                            <td>{categoryIndex * 10 + serviceIndex + 1}</td>
                            <td>{service.name}</td>
                            <td>{service.unit}</td>
                            <td>{service.price}</td>
                            <td>{service.discountPrice}</td>
                        </tr>
                    ))
                ))}
                </tbody>
            </table>
            <p className="note">* Медицинские услуги по патентной лицензии, распространяются на физических лиц, которые проходят санаторно-курортное лечение (оздоровительный бизнес гостиниц). Медицинские реабилитационные курсовые лечения (курсовая). Заготовка цен на медицинские услуги выставляется согласно санаторно-курортного лечения (оздоровительного бизнеса гостиниц). Медицинская реабилитация, курсовое лечение (курсовая).</p>
        </div>
    );
};

export default RehabilitationPage;
