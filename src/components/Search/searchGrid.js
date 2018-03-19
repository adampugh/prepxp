import React from "react";

const searchGrid = (props) => (
    <div className="listPage__questions">
        <div className="container-s">
            {props.filteredLists.length > 0 ? props.filteredLists.map((list, index) => (
                <div className="dashboard__grid__lists__item" key={`${list.title + index}`}>
                    <div>    
                        <h2>{list.title}</h2>
                        <p>{list.questions.length} Questions</p>
                    </div>
                    <h2><i className="fas fa-plus"></i></h2>
                </div>
            )) : <h2> Your search did not return any results</h2>}
        </div>
    </div>
);

export default searchGrid;