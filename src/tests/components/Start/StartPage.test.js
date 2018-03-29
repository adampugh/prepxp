import React from "react";
import { shallow } from "enzyme";

import StartPage from "../../../components/Start/StartPage";

describe("<StartPage />", () => {
    it("should match snapshot", () => {
        const wrapper = shallow(<StartPage />);
        expect(wrapper).toMatchSnapshot();
    });

    it("should render startComplete if questions are complete");
})