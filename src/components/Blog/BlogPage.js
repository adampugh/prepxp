import React, { Component } from "react";
import axios from "axios";

import Navbar from "../UI/navbarLoggedIn";
import BlogBanner from "../Blog/blogBanner";
import BlogGrid from "./blogGrid";
import Footer from "../UI/footer";

class BlogPage extends Component {
    state = {
        posts: [],
        loading: true
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        this.fetchBlogPosts();
    }

    fetchBlogPosts = () => {
        axios.get("https://prepxp-blog-api.herokuapp.com/posts")
        .then((res) => {
            this.setState({
                posts: res.data,
                loading: false
            });
        })
        .catch((err) => {
            console.log("An error occured");
        });
    }

    render() {
        return (
            <div>
                <Navbar />
                <BlogBanner />
                <BlogGrid posts={this.state.posts} loading={true} />
                <Footer />
            </div>
        );
    }
}

export default BlogPage;