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

    // EDIT_LIST_TITLE
})


// 1. dashboard
// DELETE_LIST

// 2. start
// SAVE_ANSWER

// 3. list
// ADD_QUESTION
// DELETE_QUESTION
// EDIT_LIST_TITLE
// ADD_LIST

// 4. login
// START_LOGIN

// 5. search
// ADD_liST

// 6. ui
// START_LOGOUT