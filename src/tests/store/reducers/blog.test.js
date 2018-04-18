import blogReducer from "../../../store/reducers/blog";
import blogState from "../../fixtures/blogState";
import * as actionTypes from "../../../store/actions/actionTypes";

describe("blog reducer", () => {
    it("should add comment", () => {
        const action = {
            type: actionTypes.ADD_COMMENT,
            comment: {
                text: "hello test",
                uid: "cooluid",
                name: "Bob"
            },
            fbid: blogState.blog[0].fbid
        }
        const state = blogReducer(blogState, action);
        expect(state.blog[0].comments[1]).toEqual(action.comment);
    });

    it("should delete comment", () => {
        const action = {
            type: actionTypes.DELETE_COMMENT,
            fbid: blogState.blog[0].fbid,
            postId: blogState.blog[0].comments[0].postId
        }
        const state = blogReducer(blogState, action);
        expect(state.blog[0].comments).toHaveLength(0);
    })
});