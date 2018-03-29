import React from "react";
import { shallow } from "enzyme";

import ListPageAddQuestionBanner from "../../../components/List/listPageAddQuestionBanner";

describe("<ListPageAddQuestionBanner />", () => {
    it("should match snapshot", () => {
        const wrapper = shallow(<ListPageAddQuestionBanner />);
        expect(wrapper).toMatchSnapshot();
    });
});