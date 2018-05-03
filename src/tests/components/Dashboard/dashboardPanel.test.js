import React from "react";
import { shallow } from "enzyme";

import DashboardPanel from "../../../components/Dashboard/dashboardPanel";
import user from "../../fixtures/userLists";

describe("<dashboardPanel />", () => {
    test("should match snapshot", () => {
        const wrapper = shallow(<DashboardPanel 
            lists={user.lists}
            totalAnsweredQuestions={4}
            totalQuestions={10} />);
        expect(wrapper).toMatchSnapshot();
    });
});