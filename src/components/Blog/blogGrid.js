import React from "react";
import { Link } from "react-router-dom";

import Loader from "../UI/loader";

import BlogPanel from "./blogPanel";

const blogGrid = (props) => (
    <div className="blog__background">
        <div className="container">
            {!!props.error 
                ? <h1 className="blog__grid__error">{props.error}</h1> 
                : props.loading 
                    ? <Loader /> 
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