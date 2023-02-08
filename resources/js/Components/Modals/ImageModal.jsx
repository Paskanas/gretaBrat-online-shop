import React from "react";
import Modal from "./Modal";

const ImageModal = ({ modal, setModal, src, alt }) => {
    return (
        <Modal setModal={setModal} modal={modal}>
            <img
                src={src}
                alt={alt}
                onClick={(e) => {
                    // do not close modal if anything inside modal content is clicked
                    e.stopPropagation();
                }}
            />
        </Modal>
    );
};

export default ImageModal;
