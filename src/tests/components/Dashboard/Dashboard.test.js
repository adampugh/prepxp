import React from "react";
import { shallow } from "enzyme";

import Dashboard from "../../../components/Dashboard/Dasboard";

describe("<Dashboard />", () => {
    it("should match snapshot", () => {
        const wrapper = shallow(<Dashboard />);
        expect(wrapper).toMatchSnapshot();
    });

    // check delete function returns action obj
});