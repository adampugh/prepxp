import React, { Component } from "react";
import { Link } from "react-router-dom";

import Loader from "../UI/loader";
import BlogMainPanel from "./blogMainPanel";
import BlogPanel from "./blogPanel";

class blogGrid extends Component {
    render() {
        return (
            <div className="blog__background">
                <div className="container">
                    {!!this.props.error 
                        ? <h1 className="blog__grid__error">{this.props.error}</h1> 
                        : this.props.loading 
                            ? <Loader /> 
                            : (
                                <div className="blog__grid__container">
                                    <h1 className="blog__title">Editor's Picks</h1>
                                    <Link key={this.props.mainPost.id} to={{pathname: `/prexp/blog/${this.props.mainPost.title.split(" ").join("-")}`, state:{post: this.props.mainPost, posts: this.props.allPosts}}}>
                                        <BlogMainPanel 
                                            post={this.props.mainPost} 
                                            comments={this.props.blog.filter(blog => blog.id === this.props.mainPost.id)[0].comments} />
                                    </Link>
                                    <div className="blog__grid">
                                        {this.props.editorPosts.map((post, index) => (
                                            <Link key={post.title + index} to={{pathname: `/prexp/blog/${post.title.split(" ").join("-")}`, state:{post, posts: this.props.allPosts}}}>
                                                <BlogPanel post={post} comments={this.props.blog.filter(blog => blog.id === post.id)[0].comments}/>
                                            </Link>
                                        ))}
                                    </div>
                                    <h1 className="blog__title">Latest Posts</h1>
                                    <div className="blog__grid">
                                        {this.props.posts.map((post, index) => (
                                            <Link 
                                                key={post.id} 
                                                to={{
                                                    pathname: `/prexp/blog/${post.title.split(" ").join("-")}`, state: {post, posts: this.props.allPosts}
                                                    }}>
                                                <BlogPanel post={post} comments={this.props.blog.filter(blog => blog.id === post.id)[0].comments}/>
                                            </Link>
                                        ))}
                                    </div>
                                </div>  
                            )
                    }
                </div>
            </div>
        );
    }
}

export default blogGrid;