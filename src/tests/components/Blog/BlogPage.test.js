import React from "react";
import { shallow } from "enzyme";
import BlogPage from "../../../components/Blog/BlogPage";


describe("<BlogPage />", () => {
    // 1. should match snapshot
    // 2. should fetch from blog api - test aysnc - fn should be called

    test("should match snapshot", () => {
        const wrapper = shallow(<BlogPage />);
        expect(wrapper).toMatchSnapshot();
    });

});


