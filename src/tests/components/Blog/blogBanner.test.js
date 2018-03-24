import React from "react";
import { shallow } from "enzyme";
import BlogBanner from "../../../components/Blog/blogBanner";

describe("<blogBanner />", () => {
    test("should match snapshot", () => {
        const wrapper = shallow(<BlogBanner />);
        expect(wrapper).toMatchSnapshot();
    });
});
