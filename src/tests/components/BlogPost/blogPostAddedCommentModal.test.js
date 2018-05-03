import React from "react";
import { shallow } from "enzyme";
import BlogPostAddedCommentModal from "../../../components/BlogPost/blogPostAddedCommentModal";

describe("<blogPostAddedCommentModal />", () => {
    test("should match snapshot", () => {
        const wrapper = shallow(<BlogPostAddedCommentModal isOpen={true} closeModal={() => {}}/>);
        expect(wrapper).toMatchSnapshot();
    });
});