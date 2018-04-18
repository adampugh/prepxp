import React from "react";
import { shallow } from "enzyme";
import { BlogPage } from "../../../components/Blog/BlogPage";


describe("<BlogPage />", () => {
    // 1. should match snapshot
    // 2. should call fetchBlogPosts
    // 3. fetchBlogPosts should return an array async

    test("should match snapshot", () => {
        const wrapper = shallow(<BlogPage />);
        expect(wrapper).toMatchSnapshot();
    });
        
});


