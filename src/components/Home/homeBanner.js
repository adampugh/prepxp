import React from "react";

const homeBanner = () => (
    <section className="homeBanner">
        <div className="container">
            <div className="homeBanner__content">
                <div className="homeBanner__content__picturePanel"></div>
                <div className="homeBanner__content__textPanel">
                    <h1>
                        Prepare for success in job interviews
                    </h1>
                    <p>Prepare for job interviews by answering pracitcal interview questions!
                    Create and build your own lists of interview questions or import from preexisting lists</p>
                    <button className="btn">Get Started</button>
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