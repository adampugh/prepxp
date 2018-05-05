import database from "../../firebase/firebase";
import * as actionTypes from "./actionTypes";

export const startSaveSearchList = (searchList) => {
    return () => {
        return database.ref(`searchLists`).push(searchList);
    };
}

// START FETCH SEARCH LIST
export const fetchSearchList = (lists) => ({
    type: actionTypes.FETCH_SEARCH_LIST,
    lists
});

export const startFetchSearchList = () => {
    // fetch all search list data
    return (dispatch) => {
        return database.ref(`searchLists`).once("value").then((snapshot) => {
            const lists = [];
            snapshot.forEach((childSnapshot) => {
                lists.push({
                    ...childSnapshot.val(),
                    id: childSnapshot.key
                });
            });
            dispatch(fetchSearchList(lists));
        });
    }
}

export const addSearchList = (list) => {
    return (dispatch, getState) => {
        const uid = getState().authReducer.uid;
        return database.ref(`users/${uid}/lists`).push(list)
    }
}
