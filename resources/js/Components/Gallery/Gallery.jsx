import React, { useDeferredValue, useEffect, useState } from "react";
import "./gallery.css";

import Img1 from "../../../../public/images/gallery/arrival.jpg";
import Img2 from "../../../../public/images/gallery/nowhere.jpg";
import Img3 from "../../../../public/images/gallery/a-keeper.jpg";
import Img4 from "../../../../public/images/gallery/neptune.jpg";
import Img5 from "../../../../public/images/gallery/floating_thoughts.jpg";
import Img6 from "../../../../public/images/gallery/reality-as-it-is.jpg";
import Img7 from "../../../../public/images/gallery/escapism.jpg";
import Img8 from "../../../../public/images/gallery/seen.jpg";
import ImageModal from "../Modals/ImageModal";

const Gallery = (props) => {
    const [modal, setModal] = useState(false);
    const [tempImgSrc, setTempImgSrc] = useState("");

    const handleClick = (imgSrc) => {
        setTempImgSrc(imgSrc);
        setModal(true);
    };

    const data = [
        {
            id: 1,
            imgSrc: Img1,
        },
        {
            id: 2,
            imgSrc: Img2,
        },
        {
            id: 3,
            imgSrc: Img3,
        },
        {
            id: 4,
            imgSrc: Img4,
        },
        {
            id: 5,
            imgSrc: Img5,
        },
        {
            id: 6,
            imgSrc: Img6,
        },
        {
            id: 7,
            imgSrc: Img7,
        },
        {
            id: 8,
            imgSrc: Img8,
        },
    ];

    return (
        <>
            <ImageModal
                modal={modal}
                setModal={setModal}
                src={tempImgSrc}
                alt="Zoomed image"
            />

            <div className="flex flex-col items-center mt-1 w-full">
                <div className="flex lg:max-w-screen-xl ">
                    <div className="gallery">
                        {data.map((item, index) => {
                            return (
                                <figure
                                    key={index}
                                    // className={` m-1 p-4 hover:p-2 hover:pt-1 ease-in-out duration-300 gallery__item  gallery__item--${
                                    className={` ease-in-out duration-300 gallery__item  gallery__item--${
                                        index + 1
                                    }`}
                                >
                                    <img
                                        className="gallery__img"
                                        src={item.imgSrc}
                                        onClick={() => {
                                            handleClick(item.imgSrc);
                                        }}
                                    />
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
