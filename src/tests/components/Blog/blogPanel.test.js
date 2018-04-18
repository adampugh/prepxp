import React from "react";
import { shallow } from "enzyme";
import BlogPanel from "../../../components/Blog/blogPanel";
import posts from "../../fixtures/blogPosts";

describe("<blogPanel />", () => {
    test("should match snapshot", () => {
        const wrapper = shallow(<BlogPanel post={posts[0]} comments={[]}/>);
        expect(wrapper).toMatchSnapshot();
    });
});
