import React from "react";
import { shallow } from "enzyme";

import LoginBox from "../../../components/Login/loginBox";

describe("<LoginBox />", () => {
    it("should match snapshot", () => {
        const wrapper = shallow(<LoginBox />);
        expect(wrapper).toMatchSnapshot();
    });
});