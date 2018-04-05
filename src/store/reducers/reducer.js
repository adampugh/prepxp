import * as actionTypes from "../actions/actionTypes";

const initialState = {
    name: "you",
    lists: [
        {
            id: "123",
            title: "PHP Developer",
            questions: [
                {
                    question: "What do you like to do?",
                    answer: "I would like to avoid this hell"
                }, {
                    question: "What you up to and do you like to party with more or less than the other thing that goes on and if you do what is it?",
                    answer: ""
                }, {
                    question: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
                    answer: ""
                }
            ]
        }, {
            id: "44444",
            title: "React JS Developer",
            questions: [
                {
                    question: "What do you like to do?",
                    answer: "Yes ok"
                }
            ]
        }
    ]
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.ADD_LIST:
            return {
                ...state,
                lists: [...state.lists, action.list]
            }
        case actionTypes.DELETE_LIST:
            return {
                ...state,
                lists: state.lists.filter(list => list.id !== action.id)
            }
        case actionTypes.ADD_QUESTION:
            return {
                ...state,
                lists: state.lists.map((list, index) => {
                    if (list.id === action.id) {
                        return {
                            ...list,
                            questions: [
                                ...list.questions,
                                action.question
                            ]
                        }
                    } else {
                        return {...list}
                    }
                })
            }
        case actionTypes.DELETE_QUESTION:
            return {
                ...state,
                lists: state.lists.map(list => {
                    if (list.id === action.id) {
                        return {
                            ...list,
                            questions: list.questions.filter((questions, index) => index !== action.index)
                        }
                    } else {
                        return {...list}
                    }
                })
            }
        case actionTypes.SAVE_ANSWER:
            return {
                ...state,
                lists: state.lists.map(list => {
                    if (list.id === action.id) {
                        return {
                            ...list,
                            questions: list.questions.map((question, index) => {
                                if (index === action.index) {
                                    return {
                                        ...question,
                                        answer: action.answer
                                    }
                                } else {
                                    return {
                                        ...question
                                    }
                                }
                            })
                        }
                    } else {
                        return {...list}
                    }
                })
            }
        case actionTypes.EDIT_LIST_TITLE:
            return {
                ...state,
                lists: state.lists.map(list => {
                    if (list.id === action.id) {
                        return {
                            ...list,
                            title: action.title
                        }
                    } else {
                        return {...list}
                    }
                })
            }
        default:
            return state;
    }
};

export default reducer;