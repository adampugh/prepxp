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

// DELETE_QUESTION
export const deleteQuestion = (id, index) => ({
    type: actionTypes.DELETE_QUESTION,
    id, 
    index
});

// SAVE_ANSWER
export const saveAnswer = (id, index, answer) => ({
    type: actionTypes.SAVE_ANSWER,
    id,
    index,
    answer
});

// EDIT_LIST_TITLE 
export const editListTitle = (id, title) => ({
    type: actionTypes.EDIT_LIST_TITLE,
    id,
    title
});


// 2. start
// SAVE_ANSWER

// 3. list
// EDIT_LIST_TITLE



// 4. login
// START_LOGIN

// 5. search
// ADD_liST
// FILTER_SEARCH


// 6. ui
// START_LOGOUT