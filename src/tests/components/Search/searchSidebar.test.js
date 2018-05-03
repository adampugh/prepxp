import React from "react";
import { shallow } from "enzyme";

import SearchContent from "../../../components/Search/searchContent";
import lists from "../../fixtures/searchLists";

describe("<searchContent />", () => {
    test("should match snapshot", () => {
        const wrapper = shallow(<SearchContent 
            searchLists={lists.filteredLists} 
            filterByTag={() => {}}
            clearFilter={() => {}} />);
        expect(wrapper).toMatchSnapshot();
    });
});