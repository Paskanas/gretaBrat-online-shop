import { OptionsProps } from "@/types";
import AddToCartButton from "../AddToCartButton";
import { useState } from "react";

const Options = ({ art, sizes, cartItems, setCartItems }: OptionsProps) => {
    const [selectedSize, setSelectedSize] = useState("");

    return (
        <div className="p-6">
            <div className="mb-6">
                <h1 className="h2-color uppercase mb-4">
                    {art.title}
                </h1>
                
                <p className="text-gray-600 mb-6 leading-relaxed default-font">
                    {art.description}
                </p>

                <div className="mb-6">
                    <span className="text-3xl font-bold" style={{ color: 'var(--defaultColor)' }}>
                        ${art.price}
                    </span>
                </div>
            </div>

            <div className="mb-8">
                <label htmlFor="size_select" className="block text-sm font-medium text-gray-700 mb-3 default-font">
                    Select Size
                </label>
                <select
                    id="size_select"
                    className="w-full p-3 border-2 rounded-lg focus:outline-none transition-colors default-font"
                    style={{
                        borderColor: 'var(--lighterColor2)',
                        focusBorderColor: 'var(--defaultColor)'
                    }}
                    value={selectedSize}
                    onChange={(e) => setSelectedSize(e.target.value)}
                    onFocus={(e) => e.target.style.borderColor = 'var(--defaultColor)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--lighterColor2)'}
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
                    className="block w-full text-center font-semibold py-3 px-6 rounded-lg transition duration-200 default-font"
                    style={{
                        backgroundColor: 'var(--lighterColor2)',
                        color: 'var(--defaultColor)',
                        border: `2px solid var(--lighterColor2)`
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = 'var(--lighterColor)';
                        e.currentTarget.style.borderColor = 'var(--defaultColor)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'var(--lighterColor2)';
                        e.currentTarget.style.borderColor = 'var(--lighterColor2)';
                    }}
                >
                    View Cart
                </a>
            </div>

            <div className="mt-8 pt-6 border-t" style={{ borderColor: 'var(--lighterColor2)' }}>
                <h3 className="font-semibold mb-3 default-font" style={{ color: 'var(--defaultColor)' }}>
                    Product Details
                </h3>
                <ul className="text-sm text-gray-600 space-y-2 default-font">
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
