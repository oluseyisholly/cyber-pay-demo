import React from "react"
import { Modal } from "react-bootstrap"


const CustomModal = ({
    setShowModal,
    show = false, 
    title,
    body
    }) =>{
    return(
        <React.Fragment>
            <Modal 
                size="lg"
                onHide={() => setShowModal(false)} 
                show={show}
                dialogClassName="modal-90w"
            >
                <Modal.Header closeButton className="modal-header">
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{body}</Modal.Body>
            </Modal>
        </React.Fragment>
    );
};

export default CustomModal;