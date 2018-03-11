import React from "react";

import bottomBanner from "../../assets/images/bottomBanner.png";

const homeBottomBanner = () => (
    <section className="bottomBanner">
        <div className="container">
            <h1>Land your dream job</h1>
            <p>Sign up to PrepXP today to better your career and get the job 
            you deserve! Pass the interview by gaining experience and preparing
            for success in all future job interviews.</p>
            <button className="btn">Start now</button>
            <img src={bottomBanner} alt="policeman, business man and designer" />
        </div>
    </section>
);

export default homeBottomBanner;
