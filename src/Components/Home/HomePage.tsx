import "../../Styles/Home/HomePage.css";

import React from "react";
import {SliderSection} from "../SliderSection";
import AboutComponent from "./AboutComponent";


const HomePage: React.FC = () => {
    const images = require.context('../../Images/HomeImages', true);
    const imageList = images.keys().map(image => images(image));

    return (
        <div className="home-container">
            <SliderSection images={imageList}></SliderSection>
            {/*<div className="collage">
                <img src={require('../Images/OlhovkaCollage.png')} alt="OlhovkaCollageAlt"/>
            </div>*/}
            <AboutComponent />
        </div>
    );
};

export default HomePage;



