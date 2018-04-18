import * as actionTypes from "./actionTypes";
import database from "../../firebase/firebase";


// START FETCH BLOGS
export const fetchBlog = (blog) => ({
    type: actionTypes.FETCH_BLOG,
    blog
});

export const startFetchBlog = () => {
    // fetch all expense data
    return (dispatch, getState) => {
        // const uid = getState().authReducer.uid;
        return database.ref(`blogs`).once("value").then((snapshot) => {
            const blogs = [];
            snapshot.forEach((childSnapshot) => {
                // convert obj into array
                const comments = [];
                for (let key in childSnapshot.val().comments) {
                    comments.push({
                        postId: key,
                        ...childSnapshot.val().comments[key]
                    });
                }
                blogs.push({
                    ...childSnapshot.val(),
                    fbid: childSnapshot.key,
                    comments: comments || []
                });
            });
            dispatch(fetchBlog(blogs));
        });
    }
}


// ADD COMMENT
export const addComment = (comment, fbid) => ({
    type: actionTypes.ADD_COMMENT,
    comment,
    fbid
});

export const startAddComment = (text, fbid, name) => {
    return (dispatch, getState) => {
        const uid = getState().authReducer.uid;
        const comment = {
            uid,
            text,
            name
        }
        return database.ref(`blogs/${fbid}/comments`).push(comment).then((ref) => {
            dispatch(addComment({
                postId: ref.key,
                ...comment
            }, fbid));
        });
    }
}

// DELETE COMMENT
export const deleteComment = (fbid, postId) => ({
    type: actionTypes.DELETE_COMMENT,
    fbid,
    postId
});

export const startDeleteComment = (fbid, postId) => {
    return (dispatch) => {
        return database.ref(`blogs/${fbid}/comments/${postId}`).remove().then(() => {
            dispatch(deleteComment(fbid, postId));
        });
    }
}