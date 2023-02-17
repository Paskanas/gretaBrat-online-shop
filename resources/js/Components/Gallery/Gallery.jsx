import React, { useDeferredValue, useEffect, useState } from "react";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import "./gallery.css";

import ContentModal from "../Modals/ContentModal";
import { isImage, isVideo } from "@/Utils/File";

const Gallery = (props) => {
    const [modal, setModal] = useState(false);
    const [tempImgSrc, setTempImgSrc] = useState("");
    const [modalExtension, setModalExtension] = useState("");
    const handleClick = (imgSrc, extension) => {
        setTempImgSrc(imgSrc);
        setModal(true);
        setModalExtension(extension);
    };

    const isRowBased = useMediaQuery("(min-width: 1024px)");

    const colStart = (order) => {
        const gallery1ColumnStart = 1;
        const gallery1ColumnEnd = 2;
        const gallery2ColumnEnd = 3;
        const galleryRowBigStep = 6;
        const galleryRowSmallStep = 5;
        let lRowStart = 0;
        let lRowEnd = 0;
        const lColumnStart =
            order % 2 === 1 ? gallery1ColumnStart : gallery1ColumnEnd;
        const lColumnEnd =
            order % 2 === 1 ? gallery1ColumnEnd : gallery2ColumnEnd;
        let loopTimes = 1;
        if (order > 2) {
            loopTimes = 1 + (order % 2 === 1 ? (order - 1) / 2 : order / 2);
        } else {
            loopTimes = order;
        }
        for (let i = 1; i <= loopTimes; i++) {
            if (order % 2 === 1) {
                if (i === 1) {
                    lRowStart = 1;
                    lRowEnd = 1 + galleryRowBigStep;
                } else {
                    if (i % 2 === 1) {
                        lRowStart += galleryRowSmallStep;
                        lRowEnd += galleryRowBigStep;
                    } else {
                        lRowStart += galleryRowBigStep;
                        lRowEnd += galleryRowSmallStep;
                    }
                }
            } else {
                if (i === 2) {
                    lRowStart = 1;
                    lRowEnd = 1 + galleryRowSmallStep;
                } else {
                    if (i % 2 === 0 && i > 1) {
                        lRowStart += galleryRowBigStep;
                        lRowEnd += galleryRowSmallStep;
                    } else {
                        lRowStart += galleryRowSmallStep;
                        lRowEnd += galleryRowBigStep;
                    }
                }
            }
        }

        return {
            container: () => ({
                gridColumnStart: lColumnStart,
                gridColumnEnd: lColumnEnd,
                gridRowStart: lRowStart,
                gridRowEnd: lRowEnd,
            }),
        };
    };

    return (
        <>
            {
                <ContentModal
                    modal={modal}
                    setModal={setModal}
                    src={tempImgSrc}
                    alt="Zoomed image"
                    extension={modalExtension}
                />
            }

            <div className="flex flex-col items-center mt-1 w-full">
                <div className="flex lg:max-w-screen-xl ">
                    <div className="gallery">
                        {props.portfolioImages
                            .sort((a, b) => a.order - b.order)
                            .map((item, index) => {
                                return (
                                    <figure
                                        key={item.order}
                                        className={` ease-in-out duration-300 gallery__item`}
                                        style={
                                            isRowBased
                                                ? colStart(
                                                      item.order
                                                  ).container()
                                                : null
                                        }
                                    >
                                        {isImage(item.extension) ? (
                                            <img
                                                className="gallery__img"
                                                src={item.photo_path}
                                                onClick={() => {
                                                    handleClick(
                                                        item.photo_path,
                                                        item.extension
                                                    );
                                                }}
                                            />
                                        ) : isVideo(item.extension) ? (
                                            <video
                                                loop
                                                autoPlay
                                                muted
                                                className="gallery__img"
                                                onClick={() => {
                                                    handleClick(
                                                        item.photo_path,
                                                        item.extension
                                                    );
                                                }}
                                            >
                                                <source
                                                    src={item.photo_path}
                                                    type="video/mp4"
                                                />
                                            </video>
                                        ) : null}
                                    </figure>
                                );
                            })}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Gallery;
