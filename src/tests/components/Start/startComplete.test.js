import React from "react";
import { shallow } from "enzyme";

import StartComplete from "../../../components/Start/startComplete";
import user from "../../fixtures/userLists";

describe("<StartComplete />", () => {
    it("should match snapshot", () => {
        const wrapper = shallow(<StartComplete list={user.lists[0]} startCompleteList={() => {}} />);
        expect(wrapper).toMatchSnapshot();
    });
});