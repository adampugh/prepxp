import React, { Component } from "react";
import axios from "axios";

import Navbar from "../UI/navbarLoggedIn";
import BlogBanner from "../Blog/blogBanner";
import BlogGrid from "./blogGrid";
import Footer from "../UI/footer";

class BlogPage extends Component {
    state = {
        posts: [],
        loading: true,
        error: null
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
                loading: false,
                error: null
            });
        })
        .catch((err) => {
            this.setState({
                error: "Sorry, blog posts could not be retrieved"
            })
        });
    }

    render() {
        return (
            <div>
                <Navbar />
                <BlogBanner />
                <BlogGrid 
                    posts={this.state.posts} 
                    loading={this.state.loading} 
                    error={this.state.error} />
                <Footer />
            </div>
        );
    }
}

export default BlogPage;