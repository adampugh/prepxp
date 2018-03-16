import React from "react";

import interview from "../../assets/images/interview2.png"

const startComplete = () => (
    <section className="startComplete__div">
        <div className="container">
            <div className="startComplete__grid">
                <div className="startComplete__grid__text">
                    <h1>Questions complete</h1>
                    <p> Well done you have completed this list, good luck in your upcoming interviews!</p>
                    <div className="startComplete__buttons">
                        <button className="btn">Dashboard</button>
                        
                    </div>
                </div>
                <img src={interview} alt="people conducting an interview" />
            </div>
        </div>
    </section>
);

export default startComplete;