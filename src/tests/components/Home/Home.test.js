import React from "react";
import { shallow } from "enzyme";

import Home from "../../../components/Home/Home";

describe("<Home />", () => {
    it("should match snapshots", () => {
        const wrapper = shallow(<Home />);
        expect(wrapper).toMatchSnapshot();
    });
})