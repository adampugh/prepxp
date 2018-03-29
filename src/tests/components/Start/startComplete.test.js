import React from "react";
import { shallow } from "enzyme";

import StartComplete from "../../../components/Start/startComplete";

describe("<StartComplete />", () => {
    it("should match snapshot", () => {
        const wrapper = shallow(<StartComplete />);
        expect(wrapper).toMatchSnapshot();
    });
});