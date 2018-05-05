import React, { Component } from "react";
import { Link } from "react-router-dom";

class blogPostContent extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
        let el = document.getElementById("blogPost__content__text");
        if (el) {
            el.innerHTML = this.props.post.text;
        }
    }

    handleStartAddComment = () => {
        const text = document.querySelector("textarea").value;
        if (text.length > 0) {
            this.props.startAddComment(text, this.props.fbid, this.props.name);
            document.querySelector("textarea").value = "";
            this.props.openModal();
        }
    }

    handleStartDeleteComment = (postId) => {
        this.props.startDeleteComment(this.props.fbid, postId)
    }

    render() {
        return (
            <div className="blogPost__content">
                
                <div className="container-l">
                    <div className="blogPost__backLink">
                        <Link to="/prexp/blog"><i className="fas fa-arrow-left"></i> <p>Back to posts</p></Link>
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
                            <button 
                                onClick={this.handleStartAddComment}
                                className="btn">Send</button>
                        </div>
                    </div>
                    <div className="blogPost__content__comments">
                        <h1>Comments</h1>
                        {
                            this.props.comments.length > 0 
                                ? this.props.comments.map((comment) => (
                                    <div className="blogPost__content__comments__comment" key={comment.postId}>
                                        <h3>{comment.name}</h3>
                                        <div className="blogPost__content__comments__comment__bottomDiv">
                                        <p>{comment.text}</p>
                                        {comment.uid === this.props.uid
                                            ? <span onClick={() => this.handleStartDeleteComment(comment.postId)}>
                                                <i className="fas fa-trash-alt"></i>
                                            </span>
                                            : null
                                        }
                                        </div>
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