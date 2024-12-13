import "../../Styles/Home/HomePage.css";

import React from "react";
import {SliderSection} from "../SliderSection";
import AboutSanatoriumSection from "./AboutSanatoriumSection";
import PlacementRoomSection from "./PlacementRoomSection";
import RelaxSection from "./RelaxSection";


const HomePage: React.FC = () => {
    const images = require.context('../../Images/HomeImages/SliderImages', true);
    const imageList = images.keys().map(image => images(image));

    return (
        <div className="home-container">
            <SliderSection images={imageList}></SliderSection>
            <AboutSanatoriumSection />
            <PlacementRoomSection />
            <RelaxSection/>
        </div>
    );
};

export default HomePage;



