import React from "react";
import { shallow } from "enzyme";

import ListPageQuestions from "../../../components/List/listPageQuestions";
import user from "../../fixtures/userLists";

describe("<ListPageQuestions />", () => {
    it("should match snapshot", () => {
        const wrapper = shallow(<ListPageQuestions questions={user.lists[0].questions} />);
        expect(wrapper).toMatchSnapshot();        
    });
});