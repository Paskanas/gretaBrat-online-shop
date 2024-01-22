import { Art } from "@/types";
import { useState } from "react";

const Gallery = ({ art }: { art: Art }) => {
    const [photoIndex, setPhotoIndex] = useState(0);

    return (
        <div className="flex gap-5 ">
            <div className="w-1/3 ml-4 mt-10 flex flex-col gap-4">
                {art.photo_path && (
                    <button onClick={() => setPhotoIndex(0)}>
                        <img src={art.photo_path} alt="Main photo" />
                    </button>
                )}
                {art.hover_photo_path && (
                    <button onClick={() => setPhotoIndex(1)}>
                        <img
                            src={art.hover_photo_path}
                            alt="Secondary photo"
                        />
                    </button>
                )}
            </div>
            <div className="carousel-container w-2/3 m-10 items-center  content-start">
                <div
                    className="carousel-item h-auto"
                    style={{
                        transition: "1s cubic-bezier(0.39, 0.575, 0.565, 1)",
                        transform: `translate(-${photoIndex * 100}%)`,
                    }}
                >
                    <img
                        src={art.photo_path}
                        alt="Main photo"
                        className=""
                    />
                </div>
                <div
                    className="carousel-item  h-auto"
                    style={{
                        transition: "1s cubic-bezier(0.39, 0.575, 0.565, 1)",
                        transform: `translate(-${photoIndex * 100}%)`,
                    }}
                >
                    <img
                        src={art.hover_photo_path}
                        alt="Secondary photo"
                    />
                </div>
            </div>
        </div>
    );
};

export default Gallery;
