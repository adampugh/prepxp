import React from "react";

import BlogPost from "./blogPost";

const blogGrid = (props) => (
    <div className="blog__background">
        <div className="container">
            <div className="blog__grid">
                {props.posts.map((post, index) => <BlogPost post={post} key={post.title + index}/>)}
            </div>
        </div>
    </div>
);

export default blogGrid;