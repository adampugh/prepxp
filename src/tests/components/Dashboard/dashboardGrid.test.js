import React from "react";
import { shallow } from "enzyme";

import DashboardGrid from "../../../components/Dashboard/DashboardGrid";
import user from "../../fixtures/userLists";

describe("<DashboardGrid />", () => {
    it("should match snapshot", () => {
        const wrapper = shallow(<DashboardGrid lists={user.lists}  />);
        expect(wrapper).toMatchSnapshot();
    });
});