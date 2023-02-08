import React from "react";
import Modal from "./Modal";

const MessageModal = ({ modal, setModal, modalMessage }) => {
    const messages = modalMessage;

    return (
        <>
            <Modal setModal={setModal} modal={modal} close={false}>
                <div
                    className="flex flex-col justify-items-center items-center bg-white"
                    onClick={(e) => {
                        // do not close modal if anything inside modal content is clicked
                        e.stopPropagation();
                    }}
                >
                    <button
                        onClick={() => {
                            setModal(false);
                        }}
                        className="bg-black text-white w-28 p-4 py-2 rounded mt-8"
                    >
                        OK
                    </button>
                </div>
            </Modal>
        </>
    );
};

export default MessageModal;
