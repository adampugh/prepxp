import React from "react";
import { shallow } from "enzyme";

import DashboardBanner from "../../../components/Dashboard/dashboardBanner";

describe("<DashboardBanner />", () => {
    it("should match snapshot", () => {
        const wrapper = shallow(<DashboardBanner />);
        expect(wrapper).toMatchSnapshot();
    });
});