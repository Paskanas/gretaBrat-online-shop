import { Art } from "@/types";
import { useState } from "react";
import "../Gallery/gallery.css";

const Gallery = ({ art }: { art: Art }) => {
    const [photoIndex, setPhotoIndex] = useState(0);

    return (
        <div className="flex flex-col lg:flex-row gap-4">
            {/* Thumbnail gallery */}
            <div className="flex lg:flex-col gap-4 order-2 lg:order-1 lg:w-1/4">
                {art.photo_path && (
                    <button 
                        onClick={() => setPhotoIndex(0)}
                        className={`overflow-hidden rounded border-2 transition-all duration-200 ${
                            photoIndex === 0 ? 'border-purple-500' : 'border-gray-200 hover:border-gray-300'
                        }`}
                    >
                        <img 
                            src={art.photo_path} 
                            alt="Main photo"
                            className="w-full h-20 lg:h-24 object-cover transition-transform duration-200 hover:scale-105"
                        />
                    </button>
                )}
                {art.hover_photo_path && (
                    <button 
                        onClick={() => setPhotoIndex(1)}
                        className={`overflow-hidden rounded border-2 transition-all duration-200 ${
                            photoIndex === 1 ? 'border-purple-500' : 'border-gray-200 hover:border-gray-300'
                        }`}
                    >
                        <img
                            src={art.hover_photo_path}
                            alt="Secondary photo"
                            className="w-full h-20 lg:h-24 object-cover transition-transform duration-200 hover:scale-105"
                        />
                    </button>
                )}
            </div>
            
            {/* Main image display */}
            <div className="relative lg:w-3/4 order-1 lg:order-2 gallery__item">
                <div className="overflow-hidden rounded-lg">
                    {photoIndex === 0 ? (
                        <img
                            src={art.photo_path}
                            alt={art.title}
                            className="gallery__img w-full h-auto"
                        />
                    ) : (
                        <img
                            src={art.hover_photo_path}
                            alt={`${art.title} - Alternative view`}
                            className="gallery__img w-full h-auto"
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Gallery;
