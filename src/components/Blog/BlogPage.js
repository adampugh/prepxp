import React, { Component } from "react";

import Navbar from "../UI/navbarLoggedIn";
import BlogGrid from "./blogGrid";
import Footer from "../UI/footer";

class BlogPage extends Component {
    state = {
        posts: [
            {
                title: "5 Tips to get things done",
                text: "sf sdfg dfasd df dg asdf sdf adsf sadf",
                img: ""
            }
        ]
    }



    render() {
        return (
            <div>
                <Navbar />
                <BlogGrid />
                <Footer />
            </div>
        );
    }
}

export default BlogPage;