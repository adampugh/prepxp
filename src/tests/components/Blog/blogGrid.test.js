import React from "react";
import { shallow } from "enzyme";

import BlogGrid from "../../../components/Blog/blogGrid";
import Loader from "../../../components/UI/loader";
import posts from "../../fixtures/blogPosts";

describe("<blogGrid />", () => {
    test("should match snapshot", () => {
        const wrapper = shallow(<BlogGrid posts={posts} />);
        expect(wrapper).toMatchSnapshot();
    });

    test("should render loading while waiting for posts", () => {
        const wrapper = shallow(<BlogGrid posts={[]} loading={true}/>);
        expect(wrapper.contains(<Loader />)).toBe(true);
        expect(wrapper).toMatchSnapshot();
    });

    test("should render error message if error", () => {
        const wrapper = shallow(<BlogGrid posts={[]} loading={true} error={"Sorry, an error has occured"} />);
        expect(wrapper.contains("<h1 className='blog__grid__error'>Sorry, an error has occured</h1>"));
        expect(wrapper).toMatchSnapshot();
    });
});