import React from "react";
import CircularProgressbar from 'react-circular-progressbar';

const dashboardPanel = (props) => {
    let listsCompleted = props.lists.filter(list => list.timesCompleted > 0).length;
    let listsCompletedPercentage = props.lists.length > 0 
        ? Math.round((listsCompleted / props.lists.length) * 100)
        : 0;

    let answeredQuestions = 0;
    let totalQuestions = 0;

    props.lists.forEach(list => {
        answeredQuestions += list.questions.filter(question => !!question.answer).length;
        totalQuestions += list.questions.length;
    });

    let totalAnsweredPercentage = totalQuestions > 0 
    ? Math.round((answeredQuestions / totalQuestions) * 100)
    : 0;

    return (
    <div className="dashboard__grid__panel">
        <div className="dashboard__grid__panel__box">
            <div>
                <h2>Questions Answered</h2>
                <CircularProgressbar 
                    percentage={ totalAnsweredPercentage } 
                    initialAnimation={true} 
                    backgroundPadding={10}/>
                
                <p>{`${answeredQuestions} / ${totalQuestions}`}</p>
            </div>
            <div>
                <h2>Lists Completed</h2>
                <CircularProgressbar 
                    percentage={ listsCompletedPercentage } 
                    initialAnimation={true} 
                    backgroundPadding={10} />
                <p>{`${listsCompleted} / ${props.lists.length}`}</p>
            </div>
            <div className="dashboard__grid__panel__box__mostCompleted">
                <h2>Most Completed</h2>
                {
                    props.lists.sort((a, b) => b.timesCompleted - a.timesCompleted)
                        .slice(0, 3)
                        .map((list, index) => 
                            <p key={index + list.title}>{`${index + 1}. ${list.title} `}
                                <span>{`${list.timesCompleted}`}</span>
                            </p>)
                }
            </div>
        </div>
    
    </div>
)
}
export default dashboardPanel;
