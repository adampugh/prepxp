import React from "react";
import { shallow } from "enzyme";

import { StartPage } from "../../../components/Start/StartPage";
import StartComplete from "../../../components/Start/startComplete";
import user from "../../fixtures/userLists";

describe("<StartPage />", () => {
    const locationObj = {
        state: {
            list: user.lists[0]
        }
    }

    it("should match snapshot", () => {
        const wrapper = shallow(<StartPage location={locationObj} list={user.lists[0]}/>);
        expect(wrapper).toMatchSnapshot();
    });

})