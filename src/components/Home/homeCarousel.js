import React from "react";

import carousel1 from "../../assets/images/carousel1.jpg";
import carousel2 from "../../assets/images/carousel2.jpg";
import carousel3 from "../../assets/images/carousel4.jpg";

const Carousel = require("nuka-carousel");



const homeCarousel = () => (
    <section className="container carousel">
        <Carousel autoplay={true} wrapAround={true} >
            <div className="carousel__panel">
                <img src={carousel3} alt="man climbing chart" />
                <div>
                    <h2>Available on all devices</h2>
                    <p>Whether you are accessing PrepXP on a mobile, tablet or desktop
                    rest assured that you are fully covered. PrepXP is a fully responsive
                    web application that allows users to have full functionality on all
                    popular browsers.</p>
                    <p>Sign up today to hone your skills and be prepared whatever devices
                    you are using</p>
                </div>
            </div>
            <div className="carousel__panel">
                <img src={carousel1} alt="man climbing chart" />
                <div>
                    <h2>Practise anywhere</h2>
                    <p>Practise anywhere you have an internet connection. PrepXP is
                    perfect for last minute preparations before a job interview or
                    while you're preparing to re-enter the workforce.
                    </p>
                    <p>Have the freedom to travel and know that your skills are still
                    being honed wherever you are in the world. PrepXP will be a 
                    available as an offline web application in the future.</p>
                </div>
            </div>
            <div className="carousel__panel">
                <img src={carousel2} alt="man climbing chart" />
                <div>
                    <h2>Save valuable time</h2>
                    <p>Finding quality up to date interview questions are prepartion can 
                    be costly and difficult to find. At PrepXP we value your time and
                    want to give the best service possible.</p>
                    <p>We curate lists of interview questions that are up to date and 
                    relevant to the current job market to ensure that you are well 
                    equipped to pass any interview</p>
                </div>
            </div>
        </Carousel>
    </section>
);

export default homeCarousel;