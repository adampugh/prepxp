import React, { Component } from "react";

class blogPostContent extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
        const el = document.getElementById("blogPost__content__text");
        el.innerHTML = this.props.post.text;
    }


    render() {
        return (
            <div className="blogPost__content">
                <div className="container-s">
                    <div className="blogPost__content__panel">
                        <h1>{this.props.post.title}</h1>
                        <h2 className="blogPost__content__byline">{this.props.post.byline}</h2>
                        <img src={this.props.post.img} alt="blog graphic" />
                        <div id="blogPost__content__text"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default blogPostContent;