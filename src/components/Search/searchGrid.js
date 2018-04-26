import React from "react";


const searchGrid = (props) => (
    <div className="searchGrid__lists container-l">
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
        )) : <h2 className="searchGrid__empty"> Your search did not return any results</h2>}
    </div>
);

export default searchGrid;