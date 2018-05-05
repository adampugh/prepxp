import React from "react";
import { Link } from "react-router-dom";

import desk from "../../assets/images/deskimg.png";

const homeBanner = () => (
    <section className="homeBanner">
        <div className="container">
            <div className="homeBanner__content">
                
                <div className="homeBanner__content__textPanel">
                    <div className="homeBanner__content__textPanel__title">
                        <h1>Prepare for success</h1>
                    </div>
                    <div>
                        <p>Prepare for job interviews by answering pracitcal interview questions!
                        Create and build your own lists of interview questions or import from curated lists.</p>
                        <Link to="/prexp/login"><button className="btn">Get Started</button></Link>
                    </div>
                </div>
                <div className="homeBanner__content__picturePanel">
                    <div>
                        <img className="bannerText__image" src={desk} alt="man sitting at a desk" />
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default homeBanner;
