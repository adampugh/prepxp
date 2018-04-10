import React from "react";

const listPageQuestions = (props) => (
    <div className="listPage__questions">
        <div className="container-s">
            {props.questions.length > 0 ? props.questions.map((question, index) => (
                <div className="question__item" key={`${question.id}`}>
                    <div className="question__item__grid">
                        <h2 className="question__item__grid__questionTitle"><span>Q{index + 1}</span></h2>
                        <h2 className="quesiton__item__grid__question">{question.question}</h2>
                    </div>
                    <h2 onClick={() => props.startDeleteQuestion(props.id, index, question.id)}>
                        <i className="fas fa-trash-alt"></i>
                    </h2>
                </div>
            )) : <h2 className="listPage__questions__empty"> Add some questions to this list</h2>}
            
        </div>
    </div>
);

export default listPageQuestions;