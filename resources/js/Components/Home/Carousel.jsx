import { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faAngleRight,
    faAngleLeft,
    faCircle,
} from "@fortawesome/free-solid-svg-icons";

const Carousel = () => {
    const data = [
        {
            text: ["1"],
            bg: "carouselPhoto1.png",
        },
        {
            text: ["2"],
            bg: "carouselPhoto2.png",
        },
        {
            text: ["3"],
            bg: "carouselPhoto3.png",
        },
    ];

    const dataExpanded = [data[data.length - 1], ...data, data[0]];

    const [currentIndex, setCurrentIndex] = useState(1);
    const [currentTransition, setCurrentTransition] = useState(true);
    const [slideAvailable, setSlideAvailable] = useState(true);
    const [stopAutoSlide, setStopAutoSlide] = useState(false);

    const checkResetSlide = (index) => {
        console.log("check index " + index);
        if (index === dataExpanded.length - 1) {
            setCurrentIndex(1);
            setCurrentTransition(false);
            setTimeout(() => setCurrentTransition(true), 10);
            setTimeout(() => setCurrentIndex(2), 15);
            return true;
        } else if (index === 0) {
            setCurrentTransition(false);
            setCurrentIndex(dataExpanded.length - 2);
            setTimeout(() => setCurrentTransition(true), 10);
            setTimeout(() => setCurrentIndex(dataExpanded.length - 3), 15);

            return true;
        }
        currentTransition ? null : setCurrentTransition(true);
        return false;
    };

    const carouselInfiniteScroll = () => {
        if (checkResetSlide(currentIndex)) {
            return currentIndex;
        }
        return setCurrentIndex(currentIndex + 1);
    };

    const prevNextSlide = (parameter) => {
        if (slideAvailable) {
            setSlideAvailable(false);
            setTimeout(() => setSlideAvailable(true), 1000);
            if (checkResetSlide(currentIndex)) {
                return;
            }
            setCurrentIndex(currentIndex + parameter);
        }
        return;
    };

    const handleCarouselAutoMove = (mouseOnOff) => {
        mouseOnOff ? setStopAutoSlide(true) : setStopAutoSlide(false);
    };

    useEffect(() => {
        if (!stopAutoSlide) {
            const interval = setInterval(
                () => {
                    carouselInfiniteScroll();
                },
                currentIndex === 1 ? 10 : 8000
            );

            return () => clearInterval(interval);
        }
        return;
    }, [currentIndex, stopAutoSlide]);

    return (
        <div
            className="carousel-container relative"
            onMouseOver={() => handleCarouselAutoMove(true)}
            onMouseLeave={() => handleCarouselAutoMove(false)}
        >
            <button className="absolute top-0 bottom-0 left-0 z-10 pl-5 text-white">
                <FontAwesomeIcon
                    icon={faAngleLeft}
                    className="text-4xl"
                    onClick={() => prevNextSlide(-1)}
                ></FontAwesomeIcon>
            </button>
            <div className="absolute bottom-0 left-0 right-0 z-10 mb-5 flex items-center justify-center">
                {dataExpanded.map((item, index) => {
                    let mapedIndex = currentIndex;
                    if (mapedIndex === 0) {
                        mapedIndex = 3;
                    } else if (mapedIndex === 4) {
                        mapedIndex = 1;
                    }
                    if (index > 0 && index < dataExpanded.length - 1)
                        return (
                            <button key={index}>
                                <FontAwesomeIcon
                                    className="m-1 text-xs"
                                    style={{
                                        color: `${
                                            mapedIndex === index
                                                ? "white"
                                                : "black"
                                        }`,
                                    }}
                                    icon={faCircle}
                                    onClick={() => {
                                        setCurrentIndex(index);
                                    }}
                                ></FontAwesomeIcon>
                            </button>
                        );
                })}
            </div>

            <button className="absolute top-0 bottom-0 right-0 z-10 pr-5 text-white">
                <FontAwesomeIcon
                    icon={faAngleRight}
                    className="text-4xl"
                    onClick={() => prevNextSlide(1)}
                ></FontAwesomeIcon>
            </button>

            {dataExpanded.map((item, index) => {
                return (
                    <div
                        className="carousel-item"
                        key={index}
                        style={{
                            transition: `${
                                !currentTransition
                                    ? "0s"
                                    : "1s cubic-bezier(0.39, 0.575, 0.565, 1)"
                            }`,
                            transform: `translate(-${currentIndex * 100}%)`,
                            backgroundImage: `url("images/carousel/${item.bg}")`,
                        }}
                    >
                        {index !== 2 ? null : (
                            <>
                                <a
                                    className="absolute top-1/2 mt-5 left-1/2 uppercase p-3 pl-5 pr-5 bg-white rounded text-sm hover:bg-pink-200 transition-colors duration-500 -translate-x-1/2 -translate-y-1/2"
                                    href={route("shop")}
                                >
                                    Shop now
                                </a>
                                <h1 className="absolute uppercase top-1/3 right-1/4 text-5xl mt-4 text-white w-1/2 text-center">
                                    Get serenity at home
                                </h1>
                                <h3 className="absolute top-1/4 right-1/4 text-2xl mt-6 mr-14 text-white">
                                    Limited Edition Prints
                                </h3>
                            </>
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default Carousel;
