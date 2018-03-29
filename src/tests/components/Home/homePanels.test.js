import React from "react";
import { shallow } from "enzyme";

import HomePanels from "../../../components/Home/homePanels";

describe("<HomePanels />", () => {
    it("should match snapshot", () => {
        const wrapper = shallow(<HomePanels />);
        expect(wrapper).toMatchSnapshot();
    });
});