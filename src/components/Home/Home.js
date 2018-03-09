import React from "react";
import Navbar from "../UI/navbarLoggedOut";
import HomeBanner from "./homeBanner";
import HomeAbout from "./homeAbout";
import HomePanels from "./homePanels";

const Home = () => (
    <div>
        <Navbar />
        <HomeBanner />
        <HomeAbout />
        <HomePanels />
    </div>
);

export default Home;