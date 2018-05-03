import React from "react";
import { shallow } from "enzyme";

import SearchAddedListModal from "../../../components/Search/searchAddedListModal";

describe("<searchAddedListModal />", () => {
    test("should match snapshot", () => {
        const wrapper = shallow(<SearchAddedListModal isOpen={true} closeModal={() => {}}/>);
        expect(wrapper).toMatchSnapshot();
    });
});