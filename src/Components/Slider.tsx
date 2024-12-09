import React, {useEffect, useState} from "react";

interface SliderProps {
    images: string[];
}

const Slider: React.FC<SliderProps> = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Автоматическое переключение через каждые 2 секунды
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 2000);

        // Очистка интервала, чтобы избежать утечек памяти
        return () => clearInterval(interval);
    }, [images.length]);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="slider">
            <button className="slider-button prev" onClick={prevSlide}>
                &#10094;
            </button>
            <div className="slider-images">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Slide ${index}`}
                        className={`slide ${index === currentIndex ? "active" : ""}`}
                    />
                ))}
            </div>
            <button className="slider-button next" onClick={nextSlide}>
                &#10095;
            </button>
        </div>
    );
};

export default Slider;