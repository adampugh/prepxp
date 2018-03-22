import * as actionTypes from "../actions/actionTypes";

const initialState = {
    lists: [
        {
            title: "JavaScript Developer",
            questions: [{
                question: "why?",
                answer: "yes"
            }]
        }
    ]
}

const reducer = (state = initialState, action) => {
    return state;
};

export default reducer;