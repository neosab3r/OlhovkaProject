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
                spaceBetween={30}
                slidesPerView={3}
                centeredSlides={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, Pagination]}
                className="slider-section-swiper"
            >
            {/*передаем путь изображений из массива paths и создаем блоки <SwiperSlide> с блоком <img> внутри*/}
            {images.map((image, index) => (
                <SwiperSlide key={index}>
                    <div className="swiper-slide-content">
                        <img className={`swiper-image${index}`} src={image.image} alt={`Image ${index}`} width="600" height="600"></img>
                    </div>
                </SwiperSlide>
            ))}
            </Swiper>
        </div>
    )
}