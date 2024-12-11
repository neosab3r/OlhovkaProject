import "../../Styles/Widgets/MapWidget.css";
import React from "react";


const MapWidget:React.FC = () => {
    return (
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
            </a>
            <iframe
                src="https://yandex.ru/map-widget/v1/org/olkhovka/1645737272/reviews/?ll=55.936180%2C53.579416&page=2&z=17"
                width="600"
                height="400"
                frameBorder="1"
                allowFullScreen={true}
                style={{position: 'relative',borderRadius:'2%'}}
            ></iframe>
        </div>
    )
}

export default MapWidget;