import React from "react";
import { shallow } from "enzyme";
import BlogMainPanel from "../../../components/Blog/blogMainPanel";
import posts from "../../fixtures/blogPosts";

describe("<blogMainPanel />", () => {
    test("should match snapshot", () => {
        const wrapper = shallow(<BlogMainPanel post={posts[0]} comments={[]}/>);
        expect(wrapper).toMatchSnapshot();
    });
});