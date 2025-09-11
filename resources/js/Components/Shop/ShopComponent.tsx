import { Art } from "@/types";
import ShopImages from "./ShopImages";
import "../Gallery/gallery.css";

const ShopComponent = ({ small = false, arts }: { small?: boolean, arts: Art[] }) => {
    const showedItemsCount = small
        ? arts.length > 3
            ? 3
            : arts.length
        : arts.length;

    return (
        <div className="flex flex-col items-center mt-1 w-full">
            <h1 className="h1-color uppercase text-center mb-2">Limited Edition Prints</h1>
            <p className="uppercase text-lg text-gray-600 mb-8">Serenity Inspired Collection</p>
            
            <div className="flex lg:max-w-screen-xl xl:max-w-screen-xl 2xl:max-w-screen-2xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full px-4">
                    {arts.map((art, index) => {
                        if (index < showedItemsCount) {
                            return (
                                <figure key={art.id} className="gallery__item group">
                                    <a href={`/shop/${art.id}`} className="block relative">
                                        <ShopImages 
                                            art={art} 
                                            imgHover="gallery__img" 
                                        />
                                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <h2 className="text-white font-semibold text-lg mb-1">
                                                {art.title}
                                            </h2>
                                            <p className="text-white/90 text-sm mb-2 line-clamp-2">
                                                {art.description}
                                            </p>
                                            <div className="flex justify-between items-center">
                                                <span className="text-white font-bold text-xl">
                                                    ${art.price}
                                                </span>
                                                <span className="text-white/80 text-sm uppercase tracking-wide">
                                                    View Details
                                                </span>
                                            </div>
                                        </div>
                                    </a>
                                </figure>
                            );
                        }
                    })}
                </div>
            </div>
        </div>
    );
};

export default ShopComponent;
