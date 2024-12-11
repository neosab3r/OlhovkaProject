import "../../Styles/Widgets/ReviewsWidget.css";
import React from "react";

const ReviewsWidget:React.FC = () => {
    return (
        <div className="map-reviews-widget"
             style={{width: '560px', height: '200px', overflow: 'hidden', position: 'relative'}}>
            <iframe
                style={{
                    width: '55%',
                    height: '60%',
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
    );
}

export default ReviewsWidget;