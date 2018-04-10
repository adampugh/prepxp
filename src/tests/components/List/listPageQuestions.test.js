import React from "react";
import { shallow } from "enzyme";

import ListPageQuestions from "../../../components/List/listPageQuestions";
import listState from "../../fixtures/listState";

describe("<ListPageQuestions />", () => {
    it("should match snapshot", () => {
        const wrapper = shallow(<ListPageQuestions questions={listState.lists[0].questions} />);
        expect(wrapper).toMatchSnapshot();        
    });
});