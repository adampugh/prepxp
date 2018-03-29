import React from "react";
import { shallow } from "enzyme";

import DashboardList from "../../../components/Dashboard/dashboardList";
import user from "../../fixtures/userLists";

describe("<DashboardList />", () => {
    it("should match snapshot", () => {
        const wrapper = shallow(<DashboardList list={user.lists[0]} />);
        expect(wrapper).toMatchSnapshot();
    });
});