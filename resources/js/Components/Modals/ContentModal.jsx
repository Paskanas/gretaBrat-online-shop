import { isImage, isVideo } from "@/Utils/File";
import React from "react";
import Modal from "./Modal";

const ContentModal = ({ modal, setModal, src, alt, extension }) => {
    return (
        <Modal setModal={setModal} modal={modal}>
            {isImage(extension) ? (
                <img
                    src={src}
                    alt={alt}
                    onClick={(e) => {
                        // do not close modal if anything inside modal content is clicked
                        e.stopPropagation();
                    }}
                />
            ) : isVideo(extension) ? (
                <video
                    loop
                    autoPlay
                    muted
                    controls
                    onClick={(e) => {
                        // do not close modal if anything inside modal content is clicked
                        e.stopPropagation();
                    }}
                    src={src}
                >
                    {/* <source src={src} type="video/mp4" /> */}
                </video>
            ) : null}
        </Modal>
    );
};

export default ContentModal;
