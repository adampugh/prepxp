import React from "react";
import { shallow } from "enzyme";

import BlogPostContent from "../../../components/BlogPost/blogPostContent";
import posts from "../../fixtures/blogPosts";


describe("<BlogPostContent />", () => {
    it("should match snapshot", () => {
        const wrapper = shallow(<BlogPostContent post={posts[0]}/>);
        expect(wrapper).toMatchSnapshot();
    });
});