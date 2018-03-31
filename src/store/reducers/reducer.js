import * as actionTypes from "../actions/actionTypes";

const initialState = {
    name: "Bob",
    lists: [
        {
            title: "JavaScript Developer",
            questions: [
                {
                    question: "What is the difference between let and var?",
                    answer: "JavaScript is a language for the web."
                },
                {
                    question: "Who created JavaScript?",
                    answer: "Brendan Eich"
                }
            ]
        },
        {
            title: "PHP Developer",
            questions: [
                {
                    question: "What is PHP exactly?",
                    answer: "No-one really knows."
                }
            ]
        }
    ]
}

const reducer = (state = initialState, action) => {
    return state;
};

export default reducer;