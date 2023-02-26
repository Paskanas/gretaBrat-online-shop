import { useEffect, useState } from "react";
import "./gallery.css";

import ContentModal from "../Modals/ContentModal";
import { isImage, isVideo } from "@/Utils/File";

const Gallery = (props) => {
    const [modal, setModal] = useState(false);
    const [tempImgSrc, setTempImgSrc] = useState("");
    const [modalExtension, setModalExtension] = useState("");
    const [width, setWidth] = useState(window.innerWidth);
    const [contentCols, setContentCols] = useState(
        (width - (width % 1024)) / 1024 + 1
    );
    const contentBlockOfContent = 4;
    const updateWidth = () => {
        if (window.innerWidth != width) {
            setWidth(window.innerWidth);
        }
    };

    useEffect(() => {
        window.addEventListener("resize", updateWidth);
        return () => window.removeEventListener("resize", updateWidth);
    });

    useEffect(() => {
        if (width > 1024 && contentCols != 2) {
            setContentCols(2);
        } else if (width < 1024 && contentCols != 1) {
            setContentCols(1);
        }
    }, [width]);

    const isOneCol = () => {
        return contentCols === 1;
    };

    const handleClick = (imgSrc, extension) => {
        setTempImgSrc(imgSrc);
        setModal(true);
        setModalExtension(extension);
    };

    const imageTableSize = (maxOrder) => {
        const rowsCount =
            ((maxOrder % 2 === 0 ? maxOrder : maxOrder - 1) / 2) * 5 + 1;

        return {
            container: () => ({
                gridTemplateRows: `repeat(${
                    isOneCol() ? rowsCount * 2 : rowsCount
                },${isOneCol() ? "100px" : 10 - (contentCols - 1) + "vw"})`,
                gridTemplateColumns: `repeat(${isOneCol() ? 1 : 2}, 1fr)`,
            }),
        };
    };

    const contentMod4 = () => {
        let lastItem = props.maxOrderNum;
        if (lastItem % contentBlockOfContent > 0) {
            lastItem = lastItem % 2 === 1 ? (lastItem - 1) / 2 : lastItem / 2;
        }

        return lastItem;
    };

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
        let loopTimes = 0;
        if (order <= props.maxOrderNum) {
            loopTimes = order % 2 === 1 ? (order + 1) / 2 : order / 2;
        }
        for (let i = 1; i <= loopTimes; i++) {
            if (contentMod4() && contentMod4() === i) {
                if (order % 2 === 1) {
                    lRowStart += galleryRowSmallStep;
                    lRowEnd += galleryRowBigStep;
                } else {
                    lRowStart += galleryRowBigStep;
                    lRowEnd += galleryRowBigStep;
                }
            } else if (order % 2 === 1) {
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
                if (i === 1) {
                    lRowStart = 1;
                    lRowEnd = 1 + galleryRowSmallStep;
                } else {
                    if (i % 2 === 1) {
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
            container: () =>
                isOneCol()
                    ? {
                          height: `${100 / props.maxOrderNum}%`,
                          width: "auto",
                      }
                    : {
                          gridColumnStart: lColumnStart,
                          gridColumnEnd: lColumnEnd,
                          gridRowStart: lRowStart,
                          gridRowEnd: lRowEnd,
                      },
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
                <div className="flex lg:max-w-screen-xl xl:max-w-screen-xl 2xl:max-w-screen-2xl ">
                    <div
                        className="gallery"
                        style={imageTableSize(props.maxOrderNum).container()}
                    >
                        {props.portfolioImages.map((item, index) => {
                            if (props.maxOrderNum >= item.order) {
                                return (
                                    <figure
                                        key={item.order}
                                        className={` ease-in-out duration-300 gallery__item`}
                                        style={colStart(item.order).container()}
                                    >
                                        {isImage(item.extension) ? (
                                            <img
                                                className="gallery__img"
                                                src={item.photo_path}
                                                alt={item.title}
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
                            }
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Gallery;
