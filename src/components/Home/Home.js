import React, { Component } from "react";

import Navbar from "../UI/navbarLoggedOut";
import HomeBanner from "./homeBanner";
import HomeAbout from "./homeAbout";
import HomePanels from "./homePanels";
import HomeCarousel from "./homeCarousel";
import HomeBottomBanner from "./homeBottomBanner";
import Footer from "../UI/footer";


class Home extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div>
                <Navbar />
                <HomeBanner />
                <HomeAbout />
                <HomePanels />
                <HomeCarousel />
                <HomeBottomBanner />
                <Footer />
            </div>
        );
    }
}

export default Home;