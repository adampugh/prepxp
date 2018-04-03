import React from "react";
import { shallow } from "enzyme";

import { ListPage } from "../../../components/List/ListPage";
import user from "../../fixtures/userLists";

describe("<ListPage />", () => {
    it("should match snapshot", () => {
        const locationObj = {
            state: {
                list: user.lists[0]
            }
        }
        const wrapper = shallow(<ListPage location={locationObj} />);
        expect(wrapper).toMatchSnapshot();
    });
});