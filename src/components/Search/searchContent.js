import React from "react";

import SearchSidebar from "./searchSidebar";
import SearchGrid from "./searchGrid";

const searchContent = (props) => (
    <div className="searchContent">
        <div className="container-l">
            <div className="searchContent__grid">
                <SearchSidebar 
                    searchLists={props.searchLists}
                    filterByTag={props.filterByTag} 
                    clearFilter={props.clearFilter} />
                <SearchGrid 
                    // filteredList={props.filteredList.length < 1 ? props.searchLists : props.filteredList}
                    searchLists={props.filteredList.length < 1 ? props.searchLists : props.filteredList} 
                    handleAddSearchList={props.handleAddSearchList} />
            </div>
        </div>
    </div>
);

export default searchContent;