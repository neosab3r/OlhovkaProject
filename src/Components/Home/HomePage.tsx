import "../../Styles/Home/HomePage.css";

import {FC} from "react";
import {SliderSection} from "../SliderSection";
import AboutSanatoriumSection from "./AboutSanatoriumSection";
import PlacementRoomSection from "./PlacementRoomSection";
import RelaxSection from "./RelaxSection";

const HomePage:FC = () => {
    const images = require.context('../../Images/HomeImages/SliderImages', true);
    const imageList:string[] = images.keys().map(image => images(image));

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



