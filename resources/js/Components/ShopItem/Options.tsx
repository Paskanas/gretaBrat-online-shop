import { OptionsProps } from "@/types";
import AddToCartButton from "../AddToCartButton";
import { useState } from "react";

const Options = ({ art, sizes, cartItems, setCartItems }: OptionsProps) => {
    const [selectedSize, setSelectedSize] = useState("");

    return (
        <div className="bg-white p-8 rounded-lg shadow-lg">
            <h1 className="h2-color mb-4">
                {art.title}
            </h1>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
                {art.description}
            </p>

            <div className="mb-6">
                <span className="text-3xl font-bold text-purple-600">
                    ${art.price}
                </span>
            </div>

            <div className="mb-8">
                <label htmlFor="size_select" className="block text-sm font-medium text-gray-700 mb-3">
                    Select Size
                </label>
                <select
                    id="size_select"
                    className="w-full p-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                    value={selectedSize}
                    onChange={(e) => setSelectedSize(e.target.value)}
                >
                    <option value="">Choose a size</option>
                    {sizes.size.map((size: string, index: number) => {
                        const shippingCost = sizes.shipping[index];
                        return (
                            <option key={index} value={`${size}-${index}`}>
                                {size} {shippingCost > 0 && `(+$${shippingCost} shipping)`}
                            </option>
                        );
                    })}
                </select>
            </div>

            <div className="space-y-4">
                <AddToCartButton
                    cartItems={cartItems}
                    art={art}
                    setCartItems={setCartItems}
                />
                
                <a 
                    href="/cart"
                    className="block w-full text-center bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-6 rounded-lg transition duration-200"
                >
                    View Cart
                </a>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="font-semibold mb-3">Product Details</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                    <li>• High-quality print on premium paper</li>
                    <li>• Limited edition artwork</li>
                    <li>• Signed by the artist</li>
                    <li>• Ready for framing</li>
                </ul>
            </div>
        </div>
    );
};

export default Options;
