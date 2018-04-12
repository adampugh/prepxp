import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

import * as actionTypes from "../../../store/actions/actionTypes";
import * as actions from "../../../store/actions/auth";
import database from "../../../firebase/firebase";

const uid = "testuid";
const createMockStore = configureMockStore([thunk]);

describe("auth actions", () => {
    it("should return LOGIN action object", () => {
        const uid = "testuid";
        const action = actions.login(uid);
        expect(action).toEqual({
            type: actionTypes.LOGIN,
            uid
        });
    });

    it("should return LOGOUT action object", () => {
        const action = actions.logout();
        expect(action).toEqual({
            type: actionTypes.LOGOUT
        });
    });


    it("should add name to store", (done) => {
        const store = createMockStore({ authReducer: { uid } });
        const name = "testname";
        // checks action is dispatched
        return store.dispatch(actions.startSetUsername(name, uid)).then(() => {
            // checks name was updated on db
            return database.ref(`users/${uid}/name`).once("value");
        }).then((snapshot) => {
            expect(snapshot.val()).toEqual(name);
            done();
        });
    });

});