import React, { Component } from "react";
import { Link } from "react-router-dom";

class blogPostContent extends Component {
    componentDidMount() {
        // window.scrollTo(0, 0);
        let el = document.getElementById("blogPost__content__text");
        if (el) {
            el.innerHTML = this.props.post.text;
        }
    }


    render() {
        return (
            <div className="blogPost__content">
                
                <div className="container">
                    <div className="blogPost__backLink">
                        <Link to="/blog"><i className="fas fa-arrow-left"></i> <p>Back to posts</p></Link>
                    </div>
                    <div className="blogPost__content__panel">
                        <h1>{this.props.post.title}</h1>
                        <h2 className="blogPost__content__byline">{this.props.post.byline}</h2>
                        <img src={this.props.post.img} alt="blog graphic" />
                        <div id="blogPost__content__text"></div>
                    </div>
                    <div className="blogPost__content__commentBox">
                        <h1>Comments Box</h1>
                        <textarea rows="6" placeholder="Leave a comment..."/>
                        <div className="blogPost__content__commentBox__button">
                            <button className="btn">Send</button>
                        </div>
                    </div>
                    <div className="blogPost__content__comments">
                        <h1>Comments</h1>
                        {
                            this.props.post.comments.length > 0 
                                ? this.props.post.comments.map((comment) => (
                                    <div className="blogPost__content__comments__comment">
                                        <p>{comment.name}</p>
                                        <p>{comment.text}</p>
                                    </div>
                                ))
                                : "No comments yet"
                        }
                    </div>

                </div>
            </div>
        );
    }
}

export default blogPostContent;