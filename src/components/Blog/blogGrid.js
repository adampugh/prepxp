import React from "react";
import { Link } from "react-router-dom";

import Loader from "../UI/loader";
import BlogMainPanel from "./blogMainPanel";
import BlogPanel from "./blogPanel";

const blogGrid = (props) => (
    <div className="blog__background">
        <div className="container">
            {!!props.error 
                ? <h1 className="blog__grid__error">{props.error}</h1> 
                : props.loading 
                    ? <Loader /> 
                    : (
                        <div className="blog__grid__container">
                            <h1 className="blog__title">Editor's Picks</h1>
                            <Link key={props.mainPost.id} to={{pathname: `/blog/${props.mainPost.title.split(" ").join("-")}`, state:{post: props.mainPost, posts: props.allPosts}}}>
                                <BlogMainPanel post={props.mainPost} />
                            </Link>
                            <div className="blog__grid">
                                {props.editorPosts.map((post, index) => (
                                    <Link key={post.title + index} to={{pathname: `/blog/${post.title.split(" ").join("-")}`, state:{post, posts: props.allPosts}}}>
                                        <BlogPanel post={post}/>
                                    </Link>
                                ))}
                            </div>
                            <h1 className="blog__title">Latest Posts</h1>
                            <div className="blog__grid">
                                {props.posts.map((post, index) => (
                                    <Link key={post.title + index} to={{pathname: `/blog/${post.title.split(" ").join("-")}`, state:{post, posts: props.allPosts}}}>
                                        <BlogPanel post={post}/>
                                    </Link>
                                ))}
                            </div>
                        </div>
                        
                    )
            }
        </div>
    </div>
);

export default blogGrid;