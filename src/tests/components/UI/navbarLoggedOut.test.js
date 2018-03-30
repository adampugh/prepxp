import React from "react";
import { shallow } from "enzyme";

import NavbarLoggedOut from "../../../components/UI/navbarLoggedOut";


describe("<NavbarLoggedOut />", () => {
    it("should match snap", () => {
        const wrapper = shallow(<NavbarLoggedOut />);
        expect(wrapper).toMatchSnapshot();
    });
});