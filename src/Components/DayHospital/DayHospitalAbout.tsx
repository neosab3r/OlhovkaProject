import {FC} from "react";
import "../../Styles/DayHospital/DayHospitalAbout.css";

const DayHospitalAbout: FC = () => {
    return (
        <div className="day-hospital-about-grid">
            <div className="day-hospital-about-grid-section">
                <div className="about-section-content">
                    <p className="about-description-big-text">Дневной стационар</p>
                    <div className="about-description-title">
                        <img src={require("../../Images/DayHospitalImages/DayHospital (1).jpg")} alt={"Day Hospital"}/>
                        <p className="about-description-default-title-text">
                            <p className="about-description-default-title-text" style={{fontWeight: "600", paddingBottom: "10px"}}>Комплекс
                                медицинских услуг «Дневной стационар», курсовое лечение (курсовка)</p> - это формы оказания
                            медицинской помощи пациентам, которым не требуется круглосуточное наблюдение врача (без
                            проживания и питания).</p>
                    </div>
                    <div className="about-description">
                        <p className="about-description-default-header-text">Преимущества
                            услуг:</p>
                        <p className="about-description-default-text">- Мобильность (проходить
                            назначенные процедуры можно без отрыва от производства, как при сменном, так и при дневном
                            графике работы. Рабочие дни при сменном графике, не включаются в дни лечения)</p>
                        <p className="about-description-default-text">- Эффективность
                            проводимой терапии не снижается в сравнении с лечением пациентов, находящихся на
                            круглосуточном пребывании</p>
                        <p className="about-description-default-text">- Возможность
                            медикаментозного лечения по показаниям проводится парентеральное введение лекарственных
                            препаратов: внутривенное капельное, внутривенное струйное, внутримышечное, подкожное.</p>
                        <p className="about-description-default-text">- Консультации врача
                            непосредственно в санатории – профилактории.</p>

                        <p className="about-description-default-header-text">Программа включает в
                            себя:</p>
                        <p className="about-description-default-text">• Медикаментозное лечение
                            (П/К, В/В, В/М, В/В КАП)</p>
                        <p className="about-description-default-text">• Спелеотерапия (соляная
                            шахта)</p>
                        <p className="about-description-default-text">• Лечебные ванны
                            (лекарственные,кислородные, сухая углекислая ванна)</p>
                        <p className="about-description-default-text">• Лечебные души
                            (циркулярный душ, восходящий душ, душ Шарко)</p>
                        <p className="about-description-default-text">• Кедровая бочка +
                            втирания</p>
                        <p className="about-description-default-text">• Электро-светолечение
                            (УВЧ, КВЧ, УЗТ, лазер, магнитотерапия, дарсонваль, биоптрон, инфита, очки-денас, СМТ, ДДТ,
                            полимаг, магнит-кольца, УФО)</p>

                        <p className="about-description-default-text">• Механотерапия
                            (Акварелакс, Ормед-кинезо,Ормед-профилактик, Ормед-профессионал),</p>
                        <p className="about-description-default-text">• Массаж ручной</p>
                        <p className="about-description-default-text">• Теплолечение
                            (Озокерит)/Грязелечение</p>
                        <p className="about-description-default-text">• Фитобар (кислородный
                            коктейль, фиточай, кумыс)</p>
                        <p className="about-description-default-text">• Ингаляции</p>
                        <p className="about-description-default-text">• ЛФК</p>
                        <p className="about-description-default-text">• Бассеин /
                            аквааэробика</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DayHospitalAbout;