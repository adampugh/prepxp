import React from "react";
import { shallow } from "enzyme";

import StartSavedModal from "../../../components/Start/startSavedModal";

describe("<startSavedModal />", () => {
    it("should match snapshot", () => {
        const wrapper = shallow(<StartSavedModal />);
        expect(wrapper).toMatchSnapshot();
    });
});