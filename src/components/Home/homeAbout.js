import React from "react";

import interviewImg from "../../assets/images/interview.png";

const homeAbout = () => (
    <main>
        <div className="about__title">
            <h1>Why use PrepXP in your job search?</h1>
        </div>
        <div className="about__grid">
            <div>
                <img className="bannerText__image" src={interviewImg} alt="arm icon" />
            </div>
            <div className="about__grid__text">
                <h1>Need help with upcoming interviews?</h1>
                <p>
                    PrepXP aids users in landing their dream jobs by helping them pass the interview.
                    Checkout our curated lists based on questions asked by some of the
                    largest companies in the world.
                </p>
                <button className="btn">Start now</button>
            </div>
        </div>
    </main>
);

export default homeAbout;