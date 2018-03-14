import React from "react";

const listPageAddQuestionBanner = () => (
    <div className="listPage__addQuestion">
        <div className="container">
            <h1>Add a question</h1>
            <p>Add a question below and add it to your list</p>
            <input type="text" placeholder="What weaknesses do you have?"/>
            <button className="btn">Add Question</button>
        </div>
    </div>
);

export default listPageAddQuestionBanner;

