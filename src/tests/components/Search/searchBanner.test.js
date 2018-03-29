import React from "react";
import { shallow } from "enzyme";

import SearchBanner from "../../../components/Search/searchBanner";

describe("<SearchBanner />", () => {
    it("should match snapshot", () => {
        const wrapper = shallow(<SearchBanner />);
        expect(wrapper).toMatchSnapshot();
    });
});