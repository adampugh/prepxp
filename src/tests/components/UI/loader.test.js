import React from "react";
import { shallow } from "enzyme";

import Loader from "../../../components/UI/loader";

describe("<Loader />", () => {
    it("should match snapshot", () => {
        const wrapper = shallow(<Loader />);
        expect(wrapper).toMatchSnapshot();
    });
});