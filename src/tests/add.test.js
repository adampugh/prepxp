import React from "react";
import { shallow } from "enzyme";
import BlogBanner from "../components/Blog/blogBanner";

test("should render blogBanner", () => {
    const wrapper = shallow(<BlogBanner />);
    expect(wrapper.find("h1").text()).toBe("Latest blog posts");
});
