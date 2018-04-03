import React, { Component } from "react";
import Modal from "react-modal";

const customStyles = {
    overlay : {
        zIndex: 2000,
        background: "rgba(0, 0, 0, 0.6)"
      }
}


class DashboardCreateModal extends Component {
    state = {
        listTitle: "",
        error: false
    }

    handleKeyDown = (e) => {
        if (e.key === "Enter") {
            this.handleStartAddList();
        }
    }

    updateTitle = (e) => {
        let hasError = e.target.value.length < 0
        this.setState({
            listTitle: e.target.value,
            error: hasError
        });
    }

    handleStartAddList = () => {
        let list = {
            title: this.state.listTitle,
            questions: [],
            // remove this once firebase generates ids
            id: Math.random().toString()
        }
        this.state.listTitle.length > 0 
            ? this.props.startAddList(list)
            : this.setState({
                error: true
            })
    }

    
    render() {
        return (
            <Modal
                isOpen={this.props.isOpen}
                appElement={document.getElementById('root')} 
                onRequestClose={this.props.closeModal}
                style={customStyles}
                closeTimeoutMS={200}
                className="modal"
            >
                <div className="modal--delete">
                    <span onClick={this.props.closeModal}><i className="fas fa-times"></i></span>
                    <h2>Enter list title</h2>
                    <hr />
                    {this.state.error 
                        ? <p className="modal__error">Please enter a list title</p>
                        : null
                    }
                    <input 
                        type="text" 
                        onChange={(e) => this.updateTitle(e)} 
                        onKeyDown={(e) => this.handleKeyDown(e)} />
                    <button className="btn" onClick={this.handleStartAddList}>Start</button>
                    <button className="btn" onClick={this.props.closeModal}>Cancel</button>
                </div>
            </Modal>
        )
    }
}

export default DashboardCreateModal;