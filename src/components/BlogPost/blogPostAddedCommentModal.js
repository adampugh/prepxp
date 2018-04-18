import React from "react";
import Modal from "react-modal";

const customStyles = {
    overlay : {
        zIndex: 2000,
        background: "rgba(0, 0, 0, 0.6)"
      }
}

const startSavedModal = (props) => (
    <Modal
        isOpen={props.isOpen}
        appElement={document.getElementById('root')} 
        onRequestClose={props.closeModal}
        style={customStyles}
        closeTimeoutMS={200}
        className="modal"
    >
        <div className="modal--delete">
            <span onClick={props.closeModal}><i className="fas fa-times"></i></span>
            <h2>Added comment</h2>
            <p className="modal__icon"><i className="fas fa-check"></i></p>
        </div>
    </Modal>
);

export default startSavedModal;