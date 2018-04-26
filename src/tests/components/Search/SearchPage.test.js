import React from "react";
import { shallow } from "enzyme";

import { SearchPage } from "../../../components/Search/SearchPage";

describe("<SearchPage />", () => {
    it("should match snapshot", () => {
        const wrapper = shallow(<SearchPage />);
        expect(wrapper).toMatchSnapshot();
    });
});