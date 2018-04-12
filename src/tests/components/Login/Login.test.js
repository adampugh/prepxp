import React from "react";
import { shallow } from "enzyme";

import { Login } from "../../../components/Login/Login";

describe("<Login />", () => {
    it("should match snapshot", () => {
        const wrapper = shallow(<Login />);
        expect(wrapper).toMatchSnapshot();
    });
});
