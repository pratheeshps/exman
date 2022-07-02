import React, { memo } from "react";
import Modal from "../commons/Modal";

function CategoriesModal({ showModal, handleClose }) {
    if (showModal === "delete") {
        return (
            <Modal header={"Confirmation"} show={showModal} closeModal={handleClose} width={"sm"}>
                <div>
                    <p>Are you sure do you want to delete?</p>
                    <div className="btn-actions">
                        <button onClick={handleClose}>Cancel</button>
                        <button>Yes</button>
                    </div>
                </div>
            </Modal>
        );
    }
    return (
        <Modal show={showModal} closeModal={handleClose}>
            Hello
        </Modal>
    );
}

export default memo(CategoriesModal);
