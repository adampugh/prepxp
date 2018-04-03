import React from "react";

const listPageQuestions = (props) => (
    <div className="listPage__questions">
        <div className="container-s">
            {props.questions.length > 0 ? props.questions.map((question, index) => (
                <div className="question__item" key={`${question.question + index}`}>
                    <h2><span>Q{index + 1}</span> {question.question}</h2>
                    <h2><i className="fas fa-trash-alt"></i></h2>
                </div>
            )) : <h2 className="listPage__questions__empty"> Add some questions to this list</h2>}
            
        </div>
    </div>
);

export default listPageQuestions;