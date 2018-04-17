import React from "react";
import { shallow } from "enzyme";

import { BlogPost } from "../../../components/BlogPost/blogPost";
import posts from "../../fixtures/blogPosts";

describe("<BlogPost />", () => {
    it("should match snapshot", () => {
        const blog = {
            comments: [],
            fbid: "134wegd"
        }
        let locationObj = {
            state: {
                post: posts[0]
            }
        }
        const wrapper = shallow(<BlogPost location={locationObj} blog={blog} />);
        expect(wrapper).toMatchSnapshot();
    });
})