import React from "react";
import "./modal.css";

const Modal = ({ children, modal, setModal, close = true }: { children: any, modal: boolean, setModal: React.Dispatch<React.SetStateAction<boolean>>, close?: boolean }) => {
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
