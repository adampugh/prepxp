import React from "react";
import { shallow } from "enzyme";

import HomeBanner from "../../../components/Home/homeBanner";

describe("<HomeBanner />", () => {
    it("should match snapshot", () => {
        const wrapper = shallow(<HomeBanner />);
        expect(wrapper).toMatchSnapshot();
    });
});