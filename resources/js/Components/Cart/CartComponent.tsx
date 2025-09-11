import React from "react";
import ResetCartButton from "./ResetCartButton";
import PaymentButton from "./PaymentButton";

interface CartItem {
    art_id: number;
    title?: string;
    price?: number;
    size: string[];
    count?: number;
}

interface CartComponentProps {
    cartItems: CartItem[];
    setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>;
}

const CartComponent: React.FC<CartComponentProps> = ({ cartItems, setCartItems }) => {
    const removeFromCart = (index: number) => {
        const updatedCartItems = cartItems.filter((_, i) => i !== index);
        setCartItems(updatedCartItems);
    };

    const getTotalPrice = () => {
        return cartItems.reduce((total, item) => {
            const itemPrice = item.price || 200; // Fallback price
            const itemCount = item.count || 1;
            return total + (itemPrice * itemCount);
        }, 0);
    };

    return (
        <div className="flex flex-col items-center mt-1 w-full min-h-screen">
            <h1 className="h1-color uppercase text-center mb-8">Shopping Cart</h1>
            
            {cartItems.length === 0 ? (
                <div className="text-center mt-16">
                    <p className="text-xl text-gray-600 mb-8">Your cart is empty</p>
                    <a 
                        href="/shop" 
                        className="inline-block bg-purple-200 hover:bg-purple-300 text-purple-800 font-semibold py-3 px-8 rounded-lg transition duration-300"
                    >
                        Continue Shopping
                    </a>
                </div>
            ) : (
                <div className="w-full max-w-4xl px-4">
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <div className="p-6">
                            <div className="space-y-4">
                                {cartItems.map((item, index) => (
                                    <div key={index} className="flex items-center justify-between border-b border-gray-200 pb-4">
                                        <div className="flex-1">
                                            <p className="font-semibold text-lg">
                                                {item.title || `Art Item #${item.art_id}`}
                                            </p>
                                            <p className="text-gray-600">
                                                Size: {Array.isArray(item.size) ? item.size.join(', ') : item.size}
                                            </p>
                                            {item.count && item.count > 1 && (
                                                <p className="text-gray-600">Quantity: {item.count}</p>
                                            )}
                                        </div>
                                        <div className="flex items-center space-x-4">
                                            <p className="font-bold text-xl">
                                                ${(item.price || 200) * (item.count || 1)}
                                            </p>
                                            <button
                                                onClick={() => removeFromCart(index)}
                                                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded transition duration-200"
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            
                            <div className="mt-8 pt-6 border-t border-gray-200">
                                <div className="flex justify-between items-center mb-6">
                                    <span className="text-2xl font-bold">Total: ${getTotalPrice()}</span>
                                    <div className="space-x-4">
                                        <ResetCartButton setCartItems={setCartItems} />
                                        <PaymentButton total={getTotalPrice()} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="mt-8 text-center">
                        <a 
                            href="/shop" 
                            className="inline-block bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-8 rounded-lg transition duration-300"
                        >
                            Continue Shopping
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CartComponent;