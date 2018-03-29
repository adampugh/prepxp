import React from "react";
import { shallow } from "enzyme";

import HomeCarousel from "../../../components/Home/homeCarousel";

describe("<HomeCarousel />", () => {
    it("should match snapshot", () => {
        const wrapper = shallow(<HomeCarousel />);
        expect(wrapper).toMatchSnapshot();
    });
});