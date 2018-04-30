import React from "react";

const dashboardPanel = (props) => (
    
    <div className="dashboard__grid__panel">
        <div className="dashboard__grid__panel__box">
            <div>
                <h2>Total Answered</h2>
                <p>{`${props.totalAnsweredQuestions} / ${props.totalQuestions}`}</p>
            </div>
            <div>
                <h2>Total Lists Completed</h2>
                <p>{`${props.lists.filter(list => list.timesCompleted > 0).length} / ${props.lists.length}`}</p>
            </div>
            <div className="dashboard__grid__panel__box__mostCompleted">
                <h2>Most Completed</h2>
                {
                    props.lists.sort((a, b) => b.timesCompleted - a.timesCompleted)
                        .map((list, index) => <p key={index + list.title}>{`${index + 1}. ${list.title}`}</p>)
                }
            </div>
        </div>
    
    </div>
);

export default dashboardPanel;