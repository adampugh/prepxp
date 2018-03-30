import React from "react";
import { shallow } from "enzyme";

import NavbarLoggedIn from "../../../components/UI/navbarLoggedIn";

describe("<NavbarLoggedIn />", () => {
    it("should match snapshot", () => {
        const wrapper = shallow(<NavbarLoggedIn />);
        expect(wrapper).toMatchSnapshot();
    });
});