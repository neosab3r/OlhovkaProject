import React from "react";
import "../Styles/Contacts.css";
import vkLogoLink from "../Images/vk-Link.png";

const Contacts: React.FC = () => {
    return (
        <div className="Contacts-container">
            <div className="map-widget" style={{position: 'relative', overflow: 'hidden'}}>
                <a
                    href="https://yandex.ru/maps/org/olkhovka/1645737272/?utm_medium=mapframe&utm_source=maps"
                    style={{
                        color: '#eee',
                        fontSize: '12px',
                        position: 'absolute',
                        top: '0px',
                    }}
                >
                    Ольховка
                </a>
                <a
                    href="https://yandex.ru/maps/11111/republic-of-bashkortostan/category/sanatorium/184106404/?utm_medium=mapframe&utm_source=maps"
                    style={{
                        color: '#eee',
                        fontSize: '12px',
                        position: 'absolute',
                        top: '14px',
                    }}
                >
                    Санаторий в Республике Башкортостан
                </a>
                <iframe
                    src="https://yandex.ru/map-widget/v1/org/olkhovka/1645737272/reviews/?ll=55.936180%2C53.579416&page=2&z=17"
                    width="600"
                    height="400"
                    frameBorder="1"
                    allowFullScreen={true}
                    style={{position: 'relative'}}
                ></iframe>
            </div>


            <div className="right-column">
                <p className="PlaceInfo">
                    453115, Республика Башкортостан, г. Стерлитамак, Ольховка
                </p>

                <p className="Registry">
                    <br/>
                    Регистратура
                    <br/><br/>
                    +7 (3473) 29-58-13
                </p>
                <p className="Reception">
                    Ресепшн
                    <br/><br/>
                    +7 (3473) 29-58-12
                    <br/><br/>
                    <a className="vkLink"
                       href="https://vk.com/sanatoryi_olhovka?z=photo-109953255_457241496%2Falbum-109953255_0%2Frev"
                       target="_blank" rel="noreferrer">
                        <img src={vkLogoLink} className="VkLink"/>
                    </a>
                </p>


                <div className="map-reviews-widget"
                     style={{width: '560px', height: '200px', overflow: 'hidden', position: 'relative'}}>
                    <iframe
                        style={{
                            width: '55%',
                            height: '62%',
                            border: '1px solid #e6e6e6',
                            borderRadius: '8px',
                            boxSizing: 'border-box',
                        }}
                        src="https://yandex.ru/maps-reviews-widget/1645737272?comments"
                    ></iframe>
                    <a
                        href="https://yandex.ru/maps/org/olkhovka/1645737272/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            boxSizing: 'border-box',
                            textDecoration: 'none',
                            color: '#b3b3b3',
                            fontSize: '10px',
                            fontFamily: 'YS Text, sans-serif',
                            padding: '0 14px',
                            position: 'absolute',
                            width: '100%',
                            textAlign: 'center',
                            left: '0',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            display: 'block',
                            maxHeight: '14px',
                            whiteSpace: 'nowrap',
                        }}
                    >
                    </a>
                </div>


            </div>
        </div>
    );
};

export default Contacts;
