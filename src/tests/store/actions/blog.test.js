import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

import * as actionTypes from "../../../store/actions/actionTypes";
import * as actions from "../../../store/actions/blog";
import database from "../../../firebase/firebase";

const uid = "testuid";
const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
    database.ref(`blogs`).set({}).then(() => done());
});


describe("blog actions", () => {
    it("should return ADD_COMMENT action object", () => {
        const comment = {
            uid: "123",
            name: "Bob",
            text: "Hello this is Bob!"
        };
        const fbid = "123qfe2";
        const action = actions.addComment(comment, fbid);
        expect(action).toEqual({
            type: actionTypes.ADD_COMMENT,
            comment,
            fbid
        });
    });

    it("should add comment to db and store", (done) => {
        const store = createMockStore({ authReducer: { uid } });
        const text = "test comment";
        const fbid = "1234";
        const name = "Bob";
        store.dispatch(actions.startAddComment(text, fbid, name)).then(() => {
            const actions = store.getActions();
            expect(actions[0]).toEqual({
                type: actionTypes.ADD_COMMENT,
                comment: {
                    name,
                    text,
                    uid,
                    postId: expect.any(String),
                },
                fbid
            });

            return database.ref(`blogs/${fbid}/comments/${actions[0].comment.postId}`).once("value");
        }).then((snapshot) => {
            expect(snapshot.val()).toEqual({
                name, 
                text,
                uid
            });
            done();
        });
    });


    it("should return FETCH_BLOG action object", () => {
        const blog = [];
        const action = actions.fetchBlog(blog);
        expect(action).toEqual({
            type: actionTypes.FETCH_BLOG,
            blog
        });
    });

    it("should fetch comments from firebase", (done) => {
        const store = createMockStore({});
        store.dispatch(actions.startFetchBlog()).then(() => {
            const actions = store.getActions();
            expect(actions[0]).toEqual({
                type: actionTypes.FETCH_BLOG,
                blog: expect.any(Array)
            });
            done();
        });
    });

    it("should return DELETE_COMMENT action object", () => {
        const fbid = "123";
        const postId = "dfdfg";
        const action = actions.deleteComment(fbid, postId);
        expect(action).toEqual({
            type: actionTypes.DELETE_COMMENT,
            fbid,
            postId
        });
    });

});