import React from "react";
import { shallow } from "enzyme";

import StartPage from "../../../components/Start/StartPage";
import StartComplete from "../../../components/Start/startComplete";

describe("<StartPage />", () => {
    it("should match snapshot", () => {
        const wrapper = shallow(<StartPage />);
        expect(wrapper).toMatchSnapshot();
    });

    it("should render startComplete if questions are complete", () => {
        const wrapper = shallow(<StartPage />);
        wrapper.setState({questionsComplete: true});
        expect(wrapper.contains(<StartComplete />)).toBe(true);
    });

})