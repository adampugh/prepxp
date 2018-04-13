import React from "react";
import { shallow } from "enzyme";

import SignupBox from "../../../components/Login/signupBox";

describe("<LoginBox />", () => {
    it("should match snapshot", () => {
        const wrapper = shallow(<SignupBox />);
        expect(wrapper).toMatchSnapshot();
    });
});