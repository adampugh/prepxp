import * as actionTypes from "./actionTypes";
import database from "../../firebase/firebase";
import history from "../../history";

// ADD_LIST
export const addList = (list) => ({
    type: actionTypes.ADD_LIST,
    list
});

export const startAddList = (list) => {
    return (dispatch) => {
        return database.ref("lists").push(list).then((ref) => {
            dispatch(addList({
                id: ref.key,
                ...list
            }));
            history.push({
                pathname: `/list/edit`,
                state: {
                    list: {
                        id: ref.key
                    }
                }
            })
        });
    }
}



// DELETE_LIST
export const deleteList = (id) => ({
    type: actionTypes.DELETE_LIST,
    id
});

export const startDeleteList = (id) => {
    return (dispatch) => {
        return database.ref(`/lists/${id}`).remove().then(() => {
            dispatch(deleteList(id));
        });
    }
}

// ADD_QUESTION
export const addQuestion = (id, question) => ({
    type: actionTypes.ADD_QUESTION,
    id,
    question
});

export const startAddQuestion = (id, question) => {
    return (dispatch) => {
        return database.ref(`/lists/${id}/questions`).push(question).then((ref) => {
            const questionUpdated = {
                id: ref.key,
                ...question
            }
            dispatch(addQuestion(id, questionUpdated));
        });
    }
}



// DELETE_QUESTION
export const deleteQuestion = (id, index) => ({
    type: actionTypes.DELETE_QUESTION,
    id, 
    index
});

export const startDeleteQuestion = (id, index, questionId) => {
    return (dispatch) => {
        return database.ref(`lists/${id}/questions/${questionId}`).remove().then(() => {
            dispatch(deleteQuestion(id, index));
        });
    }
}



// SAVE_ANSWER
export const saveAnswer = (id, index, answer) => ({
    type: actionTypes.SAVE_ANSWER,
    id,
    index,
    answer
});

export const startSaveAnswer = (id, index, answer, questionId) => {
    return (dispatch) => {
        return database.ref(`/lists/${id}/questions/${questionId}/answer`).set(answer).then((ref) => {
            dispatch(saveAnswer(id, index, answer));
        });
    }
}

// EDIT_LIST_TITLE 
export const editListTitle = (id, title) => ({
    type: actionTypes.EDIT_LIST_TITLE,
    id,
    title
});

export const startEditListTitle = (id, title) => {
    return (dispatch) => {
        return database.ref(`/lists/${id}/title`).set(title).then((ref) => {
            dispatch(editListTitle(id, title));
        });
    }
}

// FETCH_USER
export const fetchLists = (user) => ({
    type: actionTypes.FETCH_LISTS,
    name: user.name,
    lists: user.lists
});

export const startFetchLists = () => {
    // fetch all expense data
    return (dispatch) => {

        return database.ref().once("value").then((snapshot) => {
            const name = snapshot.val().name;
            return name;
        }).then((name) => {
            return database.ref("/lists").once("value").then((snapshot) => {
                const lists = [];
                snapshot.forEach((childSnapshot) => {
                    // convert obj into array
                    const questions = [];
                    for (let key in childSnapshot.val().questions) {
                        questions.push({
                            id: key,
                            ...childSnapshot.val().questions[key]
                        });
                    }
                    lists.push({
                        ...childSnapshot.val(),
                        id: childSnapshot.key,
                        questions: questions || []
                    });
                });
                dispatch(fetchLists({
                    lists,
                    name
                }));
            });
        });
    }
}




// 4. login
// START_LOGIN

// 5. search
// ADD_liST
// FILTER_SEARCH


// 6. ui
// START_LOGOUT