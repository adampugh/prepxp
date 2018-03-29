import React from "react";
import { shallow } from "enzyme";

import HomeAbout from "../../../components/Home/homeAbout";

describe("<HomeAbout />", () => {
    it("should match snapshot", () => {
        const wrapper = shallow(<HomeAbout />);
        expect(wrapper).toMatchSnapshot();
    });
});