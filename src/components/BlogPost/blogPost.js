import React from "react";

import Navbar from "../UI/navbarLoggedIn";
import BlogPostSidebar from "./blogPostSidebar";
import BlogPostContent from "./blogPostContent";
import Footer from "../UI/footer";

const blogPost = (props) => (
    <div>
        <Navbar />
        <div className="blogPost__container">
            <div className="container-l">
                <div className="blogPost__grid">
                    
                    <BlogPostSidebar posts={props.location.state.posts}/>
                    <BlogPostContent post={props.location.state.post} />
                </div>
            </div>
        </div>
        <Footer />
    </div>
);

export default blogPost;