import reducer from "../../../store/reducers/reducer";
import listState from "../../fixtures/listState";
import * as actionTypes from "../../../store/actions/actionTypes";

describe("reducer", () => {
    it("should setup default initial values", () => {
        const state = reducer(undefined, { type: "@@INIT"});
        expect(state).toEqual({
            name: "you",
            lists: []
        })
    });

    it("should add list", () => {
        const action = {
            id: "123666!",
            type: actionTypes.ADD_LIST,
            list: []
        }
        const state = reducer(listState, action);
        expect(state).toEqual({
            name: listState.name,
            lists: [...listState.lists, action.list]
        })
    });

    it("should delete list", () => {
        const action = {
            id: listState.lists[1].id,
            type: actionTypes.DELETE_LIST
        }
        const state = reducer(listState, action);
        expect(state).toEqual({
            name: listState.name,
            lists: [listState.lists[0]]
        });
    });

    it("should add a question to list", () => {
        const action = {
            type: actionTypes.ADD_QUESTION,
            id: listState.lists[0].id,
            question: {
                question: "What do you like about PHP?",
                answer: ""
            }
        }
        const state = reducer(listState, action);
        expect(state).toEqual({
            ...listState,
            lists: [
                {
                    ...listState.lists[0],
                    questions: [
                        ...listState.lists[0].questions,
                        action.question
                    ]
                },
                listState.lists[1]
            ]
        });
    });

    it("should delete question from list", () => {
        const action = {
            type: actionTypes.DELETE_QUESTION,
            id: listState.lists[0].id,
            index: 1
        }
        const state = reducer(listState, action);
        expect(state.lists[0].questions.length).toBe(1);
    });

    it("should save list answer", () => {
        const action = {
            type: actionTypes.SAVE_ANSWER,
            id: listState.lists[0].id,
            index: 0,
            answer: "This is the answer"
        }
        const state = reducer(listState, action);
        expect(state.lists[0].questions[0].answer).toBe(action.answer);
    });


    it("should edit list title", () => {
        const action = {
            type: actionTypes.EDIT_LIST_TITLE,
            id: listState.lists[0].id,
            title: "Hello"
        }
        const state = reducer(listState, action);
        expect(state.lists[0].title).toBe(action.title);
    });
})