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
            <div className="flex lg:max-w-screen-xl xl:max-w-screen-xl 2xl:max-w-screen-2xl w-full">
                <div className="w-full px-4">
                    <h1 className="h1-color uppercase text-center mb-8">Shopping Cart</h1>
                    
                    {cartItems.length === 0 ? (
                        <div className="text-center mt-16">
                            <p className="text-xl text-gray-600 mb-8 default-font">Your cart is empty</p>
                            <a 
                                href="/shop" 
                                className="inline-block font-semibold py-3 px-8 rounded-lg transition duration-300 default-font"
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
                                Continue Shopping
                            </a>
                        </div>
                    ) : (
                        <div className="w-full max-w-4xl mx-auto">
                            <div className="overflow-hidden">
                                <div className="p-6">
                                    <div className="space-y-4">
                                        {cartItems.map((item, index) => (
                                            <div key={index} className="flex items-center justify-between pb-4" 
                                                 style={{ borderBottom: `1px solid var(--lighterColor2)` }}>
                                                <div className="flex-1">
                                                    <p className="font-semibold text-lg default-font" style={{ color: 'var(--defaultColor)' }}>
                                                        {item.title || `Art Item #${item.art_id}`}
                                                    </p>
                                                    <p className="text-gray-600 default-font">
                                                        Size: {Array.isArray(item.size) ? item.size.join(', ') : item.size}
                                                    </p>
                                                    {item.count && item.count > 1 && (
                                                        <p className="text-gray-600 default-font">Quantity: {item.count}</p>
                                                    )}
                                                </div>
                                                <div className="flex items-center space-x-4">
                                                    <p className="font-bold text-xl default-font" style={{ color: 'var(--defaultColor)' }}>
                                                        ${(item.price || 200) * (item.count || 1)}
                                                    </p>
                                                    <button
                                                        onClick={() => removeFromCart(index)}
                                                        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded transition duration-200 default-font"
                                                    >
                                                        Remove
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    
                                    <div className="mt-8 pt-6" style={{ borderTop: `1px solid var(--lighterColor2)` }}>
                                        <div className="flex justify-between items-center mb-6">
                                            <span className="text-2xl font-bold default-font" style={{ color: 'var(--defaultColor)' }}>
                                                Total: ${getTotalPrice()}
                                            </span>
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
                                    className="inline-block font-semibold py-3 px-8 rounded-lg transition duration-300 default-font"
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
                                    Continue Shopping
                                </a>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CartComponent;