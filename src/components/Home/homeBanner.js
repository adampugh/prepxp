import React from "react";

import desk from "../../assets/images/deskimg.png";

const homeBanner = () => (
    <section className="homeBanner">
        <div className="container">
            <div className="homeBanner__content">
                
                <div className="homeBanner__content__textPanel">
                    <h1>
                        Prepare for success
                    </h1>
                    <p>Prepare for job interviews by answering pracitcal interview questions!
                    Create and build your own lists of interview questions or import from curated lists.</p>
                    <button className="btn">Get Started</button>
                </div>
                <div className="homeBanner__content__picturePanel">
                    <img className="bannerText__image" src={desk} alt="arm icon" />
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