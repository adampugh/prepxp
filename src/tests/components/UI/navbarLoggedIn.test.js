import React from "react";
import { shallow } from "enzyme";

import { Navbar } from "../../../components/UI/navbarLoggedIn";

describe("<NavbarLoggedIn />", () => {
    it("should match snapshot", () => {
        const wrapper = shallow(<Navbar />);
        expect(wrapper).toMatchSnapshot();
    });
});