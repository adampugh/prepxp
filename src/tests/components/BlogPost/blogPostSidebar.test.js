import React from "react";
import { shallow } from "enzyme";
import BlogPostSidebar from "../../../components/BlogPost/blogPostSidebar";
import posts from "../../fixtures/blogPosts";

describe("<blogPostSidebar />", () => {
    test("should match snapshot", () => {
        const wrapper = shallow(<BlogPostSidebar posts={posts} />);
        expect(wrapper).toMatchSnapshot();
    });
});