import database from "../../firebase/firebase";

export const startSaveSearchList = (searchList) => {
    return () => {
        return database.ref(`searchLists`).push(searchList);
    };
}