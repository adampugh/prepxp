import React from "react";
import { shallow } from "enzyme";

import { Dashboard } from "../../../components/Dashboard/Dasboard";
import user from "../../fixtures/userLists";

describe("<Dashboard />", () => {
    it("should match snapshot", () => {
        const wrapper = shallow(<Dashboard name={user.name} lists={user.lists} />);
        expect(wrapper).toMatchSnapshot();
    });
 
    // check delete function returns action obj
});