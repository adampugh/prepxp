import React, { Component } from "react";
import Modal from "react-modal";

const customStyles = {
    overlay : {
        zIndex: 2000,
        background: "rgba(0, 0, 0, 0.6)"
      }
}


class DashboardDeleteModal extends Component {
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
                    <h2>Delete interview questions?</h2>
                    <hr />
                    <button 
                        className="btn" 
                        onClick={() => {
                            this.props.startDeleteList(this.props.selectedListId);
                            this.props.closeModal();
                        }}>
                        Yes
                    </button>
                    <button className="btn" onClick={this.props.closeModal}>No</button>
                </div>
            </Modal>
        )
    }
}

export default DashboardDeleteModal;