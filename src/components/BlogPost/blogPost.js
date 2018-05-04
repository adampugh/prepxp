import React, { Component } from "react";
import { connect } from "react-redux";

import Navbar from "../UI/navbarLoggedIn";
import BlogPostSidebar from "./blogPostSidebar";
import BlogPostContent from "./blogPostContent";
import BlogPostAddedCommentModal from "./blogPostAddedCommentModal";
import Footer from "../UI/footer";

import * as actions from "../../store/actions/blog";


export class BlogPost extends Component {
    state = {
        modalIsOpen: false
    }

    openModal = () => {
        this.setState({
            modalIsOpen: true
        });
    }

    closeModal = () => {
        this.setState({
            modalIsOpen: false
        })
    }

    render() {
        return (
            <div>
                <BlogPostAddedCommentModal 
                    isOpen={this.state.modalIsOpen}
                    closeModal={this.closeModal} />
                <Navbar />
                <div className="blogPost__container">
                    <div className="container">
                        <div className="blogPost__grid">
                            
                            <BlogPostSidebar posts={this.props.location.state.posts}/>
                            <BlogPostContent 
                                post={this.props.location.state.post} 
                                comments={this.props.blog.comments} 
                                fbid={this.props.blog.fbid}
                                startAddComment={this.props.startAddComment} 
                                startDeleteComment={this.props.startDeleteComment}
                                name={this.props.name} 
                                uid={this.props.uid} 
                                closeModal={this.closeModal}
                                openModal={this.openModal} />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        blog: ownProps.location.state ? state.blogReducer.blog.filter(blog => blog.id === ownProps.location.state.post.id)[0] : [],
        name: state.reducer.name,
        uid: state.authReducer.uid
    }
}

const mapDispatchToProps = dispatch => {
    return {
        startAddComment: (text, fbid, name) => dispatch(actions.startAddComment(text, fbid, name)),
        startDeleteComment: (fbid, postId) => dispatch(actions.startDeleteComment(fbid, postId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogPost);
