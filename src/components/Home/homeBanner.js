import React from "react";
import { Link } from "react-router-dom";
import Fade from 'react-reveal/Fade';

import desk from "../../assets/images/deskimg.png";

const homeBanner = () => (
    <section className="homeBanner">
        <div className="container">
            <div className="homeBanner__content">
                
                <div className="homeBanner__content__textPanel">
                    <Fade top duration={3000}>
                        <h1>Prepare for success</h1>
                    </Fade>
                    <Fade left duration={3000}>
                        <p>Prepare for job interviews by answering pracitcal interview questions!
                        Create and build your own lists of interview questions or import from curated lists.</p>
                        <Link to="/login"><button className="btn">Get Started</button></Link>
                    </Fade>
                </div>
                <div className="homeBanner__content__picturePanel">
                    <Fade right duration={3000}>
                        <img className="bannerText__image" src={desk} alt="man sitting at a desk" />
                    </Fade>
                </div>
            </div>
        </div>
    </section>
);

export default homeBanner;



// <section className="homeBanner">
// <div className="container">
//     <div className="homeBanner__content">
//         <h1>
//             Prepare for job interviews by answering pracitcal interview questions!
//         </h1>
//         <button className="btn">Sign Up</button>
//     </div>
// </div>
// </section>