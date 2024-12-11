import React from "react";
import '../Styles/SliderSection.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

interface ImageProps {
    images: any[];
}

/*Слайдер изображений на странице Centre*/
export const SliderSection: React.FC<ImageProps> = ({images}: ImageProps) => {
    return (
        <div className="slider-section">
            <Swiper
                slidesPerView={3}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay]}
                className="slider-section-swiper"
            >
            {/*передаем путь изображений из массива paths и создаем блоки <SwiperSlide> с блоком <img> внутри*/}
            {images.map((image, index) => (
                <SwiperSlide key={index}>
                    <div className="slider-slide-content">
                        <img className={`swiper-image${index}`} src={image} alt={`Image ${index}`}></img>
                    </div>
                </SwiperSlide>
            ))}
            </Swiper>
        </div>
    )
}