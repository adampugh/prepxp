import * as actionTypes from "../actions/actionTypes";

export default (state = {}, action) => {
    switch (action.type) {
        case actionTypes.FETCH_SEARCH_LIST:
            return {
                searchList: action.lists
            }
        default:
            return state;
    }
};