import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

import * as actionTypes from "../../../store/actions/actionTypes";
import * as actions from "../../../store/actions/actions";
import database from "../../../firebase/firebase";

const createMockStore = configureMockStore([thunk]);

describe("list actions", () => {
    // ADD LIST
    it("should return ADD_LIST action object", () => {
        const list = {
            id: "234",
            title: "Web Designer",
            questions: []
        }
        const action = actions.addList(list);
        expect(action).toEqual({
            type: actionTypes.ADD_LIST,
            list
        });
    });

    it("should add list to db and store", (done) => {
        const store = createMockStore({});
        const list = {
            title: "new list"
        }
        // checks action is dispatched
        store.dispatch(actions.startAddList(list)).then(() => {
            const actions = store.getActions();
            expect(actions[0]).toEqual({
                type: actionTypes.ADD_LIST,
                list: {
                    id: expect.any(String),
                    ...list
                }
            });

            // checks data was saved to db
            return database.ref(`lists/${actions[0].list.id}`).once("value");
        }).then((snapshot) => {
            expect(snapshot.val()).toEqual(list);
            done();
        });
    });

    // DELETE LIST
    it("should return DELETE_LIST action object", () => {
        const id = "123";
        const action = actions.deleteList(id);
        expect(action).toEqual({
            type: actionTypes.DELETE_LIST,
            id
        });
    });

    // EDIT_LIST_TITLE
    it("should return EDIT_LIST_TITLE action object", () => {
        const id = "123";
        const newTitle = "New Title";
        const action = actions.editListTitle(id, newTitle);
        expect(action).toEqual({
            type: actionTypes.EDIT_LIST_TITLE,
            id,
            title: newTitle
        });
    });

    // ADD_QUESTION
    it("should return ADD_QUESTION action object", () => {
        const id = "123";
        const question = {
            question: "What do you think about JS?",
            answer: ""
        }
        const action = actions.addQuestion(id, question);
        expect(action).toEqual({
            type: actionTypes.ADD_QUESTION,
            id, 
            question
        })
    });

    // SAVE_ANSWER
    it("should return SAVE_ANSWER action object", () => {
        const id = "123";
        const answer = "This is the answer";
        const index = 2;
        const action = actions.saveAnswer(id, index, answer);
        expect(action).toEqual({
            type: actionTypes.SAVE_ANSWER,
            id, 
            index, 
            answer
        });
    });
})


// 1. dashboard
// DELETE_LIST

// 2. start
// SAVE_ANSWER

// 3. list
// ADD_QUESTION
// DELETE_QUESTION
// EDIT_LIST_TITLE


// 4. login
// START_LOGIN

// 5. search
// ADD_liST

// 6. ui
// START_LOGOUT