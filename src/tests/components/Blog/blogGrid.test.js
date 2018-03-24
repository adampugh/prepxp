import React from "react";
import { shallow } from "enzyme";
import BlogGrid from "../../../components/Blog/blogGrid";
import posts from "../../fixtures/blogPosts";

describe("<blogGrid />", () => {
    test("should match snapshot", () => {
        const wrapper = shallow(<BlogGrid posts={posts} />);
        expect(wrapper).toMatchSnapshot();
    })
});