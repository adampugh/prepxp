import React from "react";
import { shallow } from "enzyme";

import ListPageHeader from "../../../components/List/listPageHeader";

describe("<ListPageHeader />", () => {
    it("should match snapshot", () => {
        const wrapper = shallow(<ListPageHeader />);
        expect(wrapper).toMatchSnapshot();
    });
});