import React from "react";
import { shallow } from "enzyme";

import SearchGrid from "../../../components/Search/searchGrid";
import searchLists from "../../fixtures/searchLists";

describe("<SearchGrid />", () => {
    it("should match snapshot", () => {
        const wrapper = shallow(<SearchGrid filteredLists={searchLists.filteredLists}/>);
        expect(wrapper).toMatchSnapshot();
    });
});