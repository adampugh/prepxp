import React, { Component } from "react";

import Navbar from "../UI/navbarLoggedIn";
import BlogBanner from "../Blog/blogBanner";
import BlogGrid from "./blogGrid";
import Footer from "../UI/footer";

class BlogPage extends Component {
    state = {
        posts: [
            {
                title: "5 Tips to get things done",
                text: "sf sdfg dfasd df dg asdf sdf adsf sadf yea oia the ruler is bakc ofi course is i sfsf aoosd sgodf sfoeg wefodfguonfls sdfsd fsd sgosfsd sdfpsdf sdgxfogfdng  sdfosf sgosf sdfosg sdosf sgosdf sdfosdg sfosdf sd",
                img: "http://via.placeholder.com/300x300"
            }, {
                title: "Pass the interview with these answers",
                text: "sf sdfg dfasd df dg asdf sdf adsf sadf",
                img: "http://via.placeholder.com/300x300"
            }, {
                title: "Top 10 most common questions",
                text: "sf sdfg dfasd df dg asdf sdf adsf sadf",
                img: "http://via.placeholder.com/300x300"
            }, {
                title: "What Google and employers are looking for",
                text: "sf sdfg dfasd df dg asdf sdf adsf sadf",
                img: "http://via.placeholder.com/300x300"
            },
        ]
    }



    render() {
        return (
            <div>
                <Navbar />
                <BlogBanner />
                <BlogGrid posts={this.state.posts}/>
                <Footer />
            </div>
        );
    }
}

export default BlogPage;