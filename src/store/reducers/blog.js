import * as actionTypes from "../actions/actionTypes";

export default (state = {}, action) => {
    switch (action.type) {
        case actionTypes.FETCH_BLOG:
            return {
                blog: action.blog
            }
        case actionTypes.ADD_COMMENT:
            return {
                blog: state.blog.map(blog => {
                    if (blog.fbid === action.fbid) {
                        return {
                            ...blog,
                            comments: [
                                ...blog.comments,
                                action.comment
                            ]
                        }
                    } else {
                        return {...blog}
                    }
                })
            }
        default:
            return state;
    }
};