import React from "react";

const listPageQuestions = (props) => (
    <div className="listPage__questions">
        <div className="container">
            {props.questions.length > 0 ? props.questions.map((question, index) => (
                <div className="question__item">
                    <h2><span>Q{index + 1}</span> {question.question}</h2>
                </div>
            )) : <h2> Add some questions to this list</h2>}
        </div>
    </div>
);

export default listPageQuestions;