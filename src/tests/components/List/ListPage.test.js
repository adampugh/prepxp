import React from "react";
import { shallow } from "enzyme";

import ListPage from "../../../components/List/ListPage";

describe("<ListPage />", () => {
    it("should match snapshot", () => {
        const wrapper = shallow(<ListPage />);
        expect(wrapper).toMatchSnapshot();
    });
});