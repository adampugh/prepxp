import React from "react";

import panel1Img from "../../assets/images/panel1.jpg";
import panel2Img from "../../assets/images/panel2.jpg";
import panel3Img from "../../assets/images/panel3.jpg";

const homePanels = () => (
    <section className="container">
        <div className="panels__grid">
            <div>
                <img src={panel1Img} alt="man climbing chart" />
                
                <h2>Develop skills</h2>
                <p>Practise your ability to answer difficult interview questions and 
                    learn how to pass the interview.</p>
                
            </div>
            <div>
                <img className="bannerText__image" src={panel2Img} alt="arm icon" />
                <h2>Beat competition</h2>
                <p>Gain insight to some of the most common interview questions and 
                    prepare excellent answers to help you stand out.</p>
            </div>
            <div>
                <img className="bannerText__image" src={panel3Img} alt="arm icon" />
                <h2>Feel confident</h2>
                <p>Prepare fantastic answers and run through mock interviews to gain 
                    experience so that you feel relaxed in any interview.</p>
            </div>
        </div>
    </section>
);

export default homePanels;