import React from "react";

import blog from "../../assets/images/interview2.png";

const blogBanner = () => (
    <div className="blogBanner">
        <div className="container blogBanner__grid">
            <div className="blogBanner__text">
                <h1>Blog</h1>
                <p>Read articles from industry leaders and stay up to date
                with the latest trends in job recruitment.
                
                </p>
            </div>
            <div className="blogBanner__img">
                <img src={blog} alt="" />
            </div>
            
        </div>
        <div className="blogBanner__whiteElipse"></div>
    </div>
);

export default blogBanner;
