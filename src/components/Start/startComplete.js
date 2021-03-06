import React, { Component } from "react";
import { Link } from "react-router-dom";
 
import interview from "../../assets/images/interview2.png"

export class StartComplete extends Component {
    componentDidMount() {
        this.props.startCompleteList(this.props.list.id, this.props.list.timesCompleted + 1);
    }

    render() {
        return (
            <section className="startComplete__div">
                <div className="container">
                    <div className="startComplete__grid">
                        <div className="startComplete__grid__text">
                            <h1>Questions complete</h1>
                            <p> Well done you have completed this list, good luck in your upcoming interviews!</p>
                            <div className="startComplete__buttons">
                                <Link to="/prepxp/dashboard">
                                    <button className="btn">Dashboard</button>
                                </Link>
                            </div>
                        </div>
                        <img src={interview} alt="people conducting an interview" />
                    </div>
                </div>
            </section>
        );
    }
} 

export default StartComplete;