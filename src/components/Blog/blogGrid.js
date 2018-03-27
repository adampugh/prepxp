import React from "react";
import { Link } from "react-router-dom";

import Loading from "../UI/loading";

import BlogPanel from "./blogPanel";

const blogGrid = (props) => (
    <div className="blog__background">
        <div className="container">
            {props.loading 
                ? <Loading /> 
                : (<div className="blog__grid">
                    {props.posts.map((post, index) => (
                        <Link key={post.title + index} to={{pathname: `/blog/${post.title.split(" ").join("-")}`, state:{post}}}>
                            <BlogPanel post={post}/>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    </div>
);

export default blogGrid;