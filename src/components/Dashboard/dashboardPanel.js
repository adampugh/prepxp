import React from "react";
import CircularProgressbar from 'react-circular-progressbar';

const dashboardPanel = (props) => {
    let listsCompleted = props.lists.filter(list => list.timesCompleted > 0).length;

    return (
    <div className="dashboard__grid__panel">
        <div className="dashboard__grid__panel__box">
            <div>
                <h2>Total Answered</h2>
                <CircularProgressbar 
                    percentage={Math.round((props.totalAnsweredQuestions / props.totalQuestions) * 100) } 
                    initialAnimation={true} />
                <p>{`${props.totalAnsweredQuestions} / ${props.totalQuestions}`}</p>
            </div>
            <div>
                <h2>Lists Completed</h2>
                <CircularProgressbar 
                    percentage={Math.round((listsCompleted / props.lists.length) * 100) } 
                    initialAnimation={true} />
                <p>{`${listsCompleted} / ${props.lists.length}`}</p>
            </div>
            <div className="dashboard__grid__panel__box__mostCompleted">
                <h2>Most Completed</h2>
                {
                    props.lists.sort((a, b) => b.timesCompleted - a.timesCompleted)
                        .map((list, index) => { if (index < 3) {
                            return <p key={index + list.title}>{`${index + 1}. ${list.title} - ${list.timesCompleted}`}</p>
                        }})
                }
            </div>
        </div>
    
    </div>
)
}
export default dashboardPanel;