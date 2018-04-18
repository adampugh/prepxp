import authReducer from "../../../store/reducers/auth";
import listState from "../../fixtures/listState";
import * as actionTypes from "../../../store/actions/actionTypes";

describe("auth reducer", () => {
    it("should store user id", () => {
        const action = {
            type: actionTypes.LOGIN,
            uid: "cooluid"
        }
        const state = authReducer(listState, action);
        expect(state).toEqual({
            uid: action.uid
        })
    });

    it("should remove user id", () => {
        const action = {
            type: actionTypes.LOGOUT
        }
        const state = authReducer(listState, action);
        expect(state).toEqual({});
    });
});