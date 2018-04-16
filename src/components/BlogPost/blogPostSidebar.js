import React from "react";
import { Link } from "react-router-dom";

const blogPostSidebar = (props) => (
    <div className="blogPost__sidebar__container">
        
        <div className="blogPost__sidebar">
            <h1 className="blogPost__sidebar__title">Latest articles</h1>
            {
                props.posts.map(post => (
                    <Link key={post._id} to={{pathname: `/blog/${post.title.split(" ").join("-")}`, state:{post, posts: props.posts}}}>
                        <div className="blogPost__sidebar__item">
                            <h2>{post.title}</h2>
                            <p>{post.author}</p>
                            <hr />
                        </div>
                    </Link>
                ))
            }
        </div>
    </div>
);

export default blogPostSidebar;


// <img src={post.img} alt="post" />