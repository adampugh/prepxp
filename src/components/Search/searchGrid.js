import React from "react";

import SearchSidebar from "./searchSidebar";

const searchGrid = (props) => (
    <div className="container-l">
        <div className="searchGrid__lists">
            <SearchSidebar searchLists={props.searchLists} />
            <div>
                {props.searchLists.length > 0 ? props.searchLists.map((list, index) => (
                    <div className="searchGrid__list__item" key={`${list.title + index}`}>
                        <div>    
                            <h2>{list.title}</h2>
                            <p>{Object.keys(list.list.questions).length} Questions</p>
                        </div>
                        <h2 
                            className="searchGrid__list__icon" 
                            onClick={() => props.handleAddSearchList(list.list)}>
                            <i className="fas fa-plus"></i>
                        </h2>
                    </div>
                )) : <h2> Your search did not return any results</h2>}
            </div>
        </div>
    </div>
);

export default searchGrid;