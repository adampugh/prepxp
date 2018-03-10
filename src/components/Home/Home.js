import React from "react";
import Navbar from "../UI/navbarLoggedOut";
import HomeBanner from "./homeBanner";
import HomeAbout from "./homeAbout";
import HomePanels from "./homePanels";
import HomeCarousel from "./homeCarousel";

const Home = () => (
    <div>
        <Navbar />
        <HomeBanner />
        <HomeAbout />
        <HomePanels />
        <HomeCarousel />
    </div>
);

export default Home;