import React from "react";
import { shallow } from "enzyme";

import StartGrid from "../../../components/Start/startGrid";
import user from "../../fixtures/userLists";

describe("<StartGrid />", () => {
    it("should match snapshot", () => {
        const wrapper = shallow(<StartGrid questions={user.lists[0].questions}/>); 
        expect(wrapper).toMatchSnapshot();
    });
});