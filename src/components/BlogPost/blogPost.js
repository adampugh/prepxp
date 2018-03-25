import React from "react";

import Navbar from "../UI/navbarLoggedIn";
import BlogPostContent from "./blogPostContent";
import Footer from "../UI/footer";

const blogPost = (props) => (
    <div>
        <Navbar />
        <BlogPostContent post={props.location.state.post} />
        <Footer />
    </div>
);

export default blogPost;