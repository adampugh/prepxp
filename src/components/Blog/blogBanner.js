import React from "react";

import blog from "../../assets/images/blog.png";

const blogBanner = () => (
    <div className="blogBanner">
        <div className="container blogBanner__grid">
            <div className="blogBanner__img">
                <img src={blog} alt="" />
            </div>
            <div className="blogBanner__text">
                <h1>Latest blog posts</h1>
                <p>Read articles from industry leaders on how to best prepare for 
                interviews and put your best foot forward. 
                Read articles from industry leaders on how to best prepare for 
                interviews and put your best foot forward.
                </p>
                <p>Read articles from industry leaders on how to best prepare for 
                interviews and put your best foot forward. 
                Read articles from industry leaders on how to best prepare for 
                interviews and put your best foot forward.
                </p>
            </div>
        </div>
    </div>
);

export default blogBanner;
