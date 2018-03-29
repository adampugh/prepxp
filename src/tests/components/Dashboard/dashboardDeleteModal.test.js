import React from "react";
import { shallow } from "enzyme";

import DashboardDeleteModal from "../../../components/Dashboard/dashboardDeleteModal";

describe("<DashboardDeleteModal />", () => {
    it("should match snapshot", () => {
        const wrapper = shallow(<DashboardDeleteModal />);
        expect(wrapper).toMatchSnapshot();
    });

    // test button triggers delete function
});