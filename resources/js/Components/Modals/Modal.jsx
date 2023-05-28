import React from "react";
import "./modal.css";

const Modal = ({ children, modal, setModal, extension, close = true }) => {
    return (
        <div
            className={modal ? "modal open" : "modal"}
            onClick={() => {
                close
                    ? // close modal when outside of modal is clicked
                      setModal(false)
                    : null;
            }}
        >
            {children}
        </div>
    );
};

export default Modal;
