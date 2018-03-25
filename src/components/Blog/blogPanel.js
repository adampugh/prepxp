import React from "react";

const blogPanel = (props) => (
    <div className="blog__post">
        <img src={props.post.img} alt="blog post" />
        <div className="blog__post__text">
            <h2>{props.post.title}</h2>
            <p>{props.post.byline}</p>
        </div>
    </div>
);

export default blogPanel;