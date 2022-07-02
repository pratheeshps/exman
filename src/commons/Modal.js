import React from "react";
import "./Modal.scss";

const Modal = ({
    closeModal,
    show,
    children,
    header = "Modal header",
    width = "md",
}) => {
    const showHideClassName = show
        ? "modal display-block"
        : "modal display-none";

    return (
        <div className={showHideClassName}>
            <section className={`modal-main ${width}`}>
                <header>
                    <div>{header}</div>
                    {closeModal && (
                        <div className="close-btn" onClick={closeModal}>
                            &#10006;
                        </div>
                    )}
                </header>
                <div className="modal-body">{children}</div>
            </section>
        </div>
    );
};

export default Modal;
