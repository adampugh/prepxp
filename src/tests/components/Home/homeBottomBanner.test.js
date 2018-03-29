import React from "react";
import { shallow } from "enzyme";

import HomeBottomBanner from "../../../components/Home/homeBottomBanner";

describe("<HomeBottomBanner />", () => {
    it("should match snapshot", () => {
        const wrapper = shallow(<HomeBottomBanner />);
        expect(wrapper).toMatchSnapshot();
    });
});