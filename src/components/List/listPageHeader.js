import React from "react";

const listPageHeader = (props) => (
    <div className="listPage__header">
        <div className="container-s">
            <div className="listPage__header__content">
                <div>
                <h1>{props.title} <i className="fas fa-edit"></i></h1>
                </div>
            </div>
        </div>
    </div>
);

export default listPageHeader;