import React from "react";
import { shallow } from "enzyme";

import DashboardCreateModal from "../../../components/Dashboard/dashboardCreateModal";

describe("<DasboardCreateModal />", () => {
    it("should match snapshot", () => {
        const wrapper = shallow(<DashboardCreateModal />);
        expect(wrapper).toMatchSnapshot();
    });
});