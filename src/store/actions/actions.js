import * as actionTypes from "./actionTypes";

// 1. dashboard
// ADD_LIST
export const addList = (list) => ({
    type: actionTypes.ADD_LIST,
    list
});
// DELETE_LIST
export const deleteList = (id) => ({
    type: actionTypes.DELETE_LIST,
    id
});

// ADD_QUESTION
export const addQuestion = (id, question) => ({
    type: actionTypes.ADD_QUESTION,
    id,
    question
});

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