import React from "react";

const blogPanel = (props) => (
    <div className="blog__post">
        
        <div className="blog__post__text">
            <p>{props.post.date}</p>
            <h2>{props.post.title}</h2>
            <hr />
            <p className="blog__post__text__author">{props.post.author}</p>
            <div className="blog__post__text__comments">
                <p>{props.comments.length}<i className="fas fa-comment"></i></p>
            </div>
        </div>
        <div 
            className="blog__post__img"
            style={{backgroundImage:`url(${props.post.img})`}}>
            <div className="blog__post__img__overlay">
            <p>Read <i className="fas fa-arrow-right"></i></p>
            </div>
        </div>
        
    </div>
);

export default blogPanel;
