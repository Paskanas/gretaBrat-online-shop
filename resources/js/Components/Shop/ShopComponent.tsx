import { Art } from "@/types";
import ShopImages from "./ShopImages";

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
            
            <div className="flex lg:max-w-screen-xl xl:max-w-screen-xl 2xl:max-w-screen-2xl w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full px-4">
                    {arts.map((art, index) => {
                        if (index < showedItemsCount) {
                            return (
                                <div key={art.id} className="group">
                                    <a
                                        href={`/shop/${art.id}`}
                                        className="block transition-transform duration-300 group-hover:scale-105"
                                    >
                                        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                                            <div className="aspect-square overflow-hidden">
                                                <ShopImages 
                                                    art={art} 
                                                    imgHover="w-full h-full object-cover group-hover:opacity-80 transition-opacity duration-300" 
                                                />
                                            </div>
                                            <div className="p-6">
                                                <h2 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-purple-600 transition-colors duration-300">
                                                    {art.title}
                                                </h2>
                                                <p className="text-gray-600 mb-4 line-clamp-2">
                                                    {art.description}
                                                </p>
                                                <div className="flex justify-between items-center">
                                                    <span className="text-2xl font-bold text-purple-600">
                                                        ${art.price}
                                                    </span>
                                                    <span className="text-sm text-gray-500 uppercase tracking-wide">
                                                        View Details
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            );
                        }
                    })}
                </div>
            </div>
        </div>
    );
};

export default ShopComponent;
