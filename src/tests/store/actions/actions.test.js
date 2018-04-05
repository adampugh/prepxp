import * as actionTypes from "../../../store/actions/actionTypes";
import * as actions from "../../../store/actions/actions";

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