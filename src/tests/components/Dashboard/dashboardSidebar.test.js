import React from "react";
import { shallow } from "enzyme";

import DashboardSidebar from "../../../components/Dashboard/DashboardSidebar";

describe("<DashboardSideBar />", () => {
    it("should match snapshot", () => {
        const wrapper = shallow(<DashboardSidebar />);
        expect(wrapper).toMatchSnapshot();
    });
});