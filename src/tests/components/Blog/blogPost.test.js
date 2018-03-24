import React from "react";
import { shallow } from "enzyme";
import BlogPost from "../../../components/Blog/blogPost";
import posts from "../../fixtures/blogPosts";

describe("<blogPost />", () => {
    test("should match snapshot", () => {
        const wrapper = shallow(<BlogPost post={posts[0]} />);
        expect(wrapper).toMatchSnapshot();
    });
});