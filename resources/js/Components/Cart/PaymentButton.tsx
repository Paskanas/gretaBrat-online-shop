import React, { useState } from "react";

interface PaymentButtonProps {
    total: number;
}

const PaymentButton: React.FC<PaymentButtonProps> = ({ total }) => {
    const [isProcessing, setIsProcessing] = useState(false);
    const [showPaymentModal, setShowPaymentModal] = useState(false);

    const handlePayment = async () => {
        setIsProcessing(true);
        
        // Simulate payment processing
        setTimeout(() => {
            setIsProcessing(false);
            setShowPaymentModal(false);
            alert("Payment successful! Thank you for your purchase.");
            // In a real app, you would redirect to a success page or clear the cart
        }, 2000);
    };

    return (
        <>
            <button
                onClick={() => setShowPaymentModal(true)}
                className="font-semibold py-2 px-6 rounded-lg transition duration-200 default-font"
                style={{
                    backgroundColor: 'var(--defaultColor)',
                    color: 'white',
                    border: `2px solid var(--defaultColor)`
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--lighterColor)';
                    e.currentTarget.style.borderColor = 'var(--lighterColor)';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--defaultColor)';
                    e.currentTarget.style.borderColor = 'var(--defaultColor)';
                }}
            >
                Proceed to Payment
            </button>

            {showPaymentModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-8 rounded-lg max-w-md w-full mx-4">
                        <h2 className="text-2xl font-bold mb-6 text-center default-font" style={{ color: 'var(--defaultColor)' }}>
                            Payment Details
                        </h2>
                        
                        <div className="mb-6">
                            <p className="text-lg font-semibold mb-2 default-font" style={{ color: 'var(--defaultColor)' }}>
                                Total: ${total}
                            </p>
                        </div>

                        <form onSubmit={(e) => { e.preventDefault(); handlePayment(); }}>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2 default-font">
                                        Card Number
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="1234 5678 9012 3456"
                                        className="w-full px-3 py-2 border rounded-md focus:outline-none transition-colors default-font"
                                        style={{
                                            borderColor: 'var(--lighterColor2)'
                                        }}
                                        onFocus={(e) => e.target.style.borderColor = 'var(--defaultColor)'}
                                        onBlur={(e) => e.target.style.borderColor = 'var(--lighterColor2)'}
                                        required
                                    />
                                </div>
                                
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2 default-font">
                                            Expiry Date
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="MM/YY"
                                            className="w-full px-3 py-2 border rounded-md focus:outline-none transition-colors default-font"
                                            style={{
                                                borderColor: 'var(--lighterColor2)'
                                            }}
                                            onFocus={(e) => e.target.style.borderColor = 'var(--defaultColor)'}
                                            onBlur={(e) => e.target.style.borderColor = 'var(--lighterColor2)'}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2 default-font">
                                            CVV
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="123"
                                            className="w-full px-3 py-2 border rounded-md focus:outline-none transition-colors default-font"
                                            style={{
                                                borderColor: 'var(--lighterColor2)'
                                            }}
                                            onFocus={(e) => e.target.style.borderColor = 'var(--defaultColor)'}
                                            onBlur={(e) => e.target.style.borderColor = 'var(--lighterColor2)'}
                                            required
                                        />
                                    </div>
                                </div>
                                
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2 default-font">
                                        Cardholder Name
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="John Doe"
                                        className="w-full px-3 py-2 border rounded-md focus:outline-none transition-colors default-font"
                                        style={{
                                            borderColor: 'var(--lighterColor2)'
                                        }}
                                        onFocus={(e) => e.target.style.borderColor = 'var(--defaultColor)'}
                                        onBlur={(e) => e.target.style.borderColor = 'var(--lighterColor2)'}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="flex space-x-4 mt-8">
                                <button
                                    type="button"
                                    onClick={() => setShowPaymentModal(false)}
                                    className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-lg transition duration-200 default-font"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    disabled={isProcessing}
                                    className="flex-1 font-semibold py-2 px-4 rounded-lg transition duration-200 disabled:opacity-50 default-font"
                                    style={{
                                        backgroundColor: isProcessing ? 'var(--lighterColor)' : 'var(--defaultColor)',
                                        color: 'white',
                                        border: `2px solid ${isProcessing ? 'var(--lighterColor)' : 'var(--defaultColor)'}`
                                    }}
                                    onMouseEnter={(e) => {
                                        if (!isProcessing) {
                                            e.currentTarget.style.backgroundColor = 'var(--lighterColor)';
                                            e.currentTarget.style.borderColor = 'var(--lighterColor)';
                                        }
                                    }}
                                    onMouseLeave={(e) => {
                                        if (!isProcessing) {
                                            e.currentTarget.style.backgroundColor = 'var(--defaultColor)';
                                            e.currentTarget.style.borderColor = 'var(--defaultColor)';
                                        }
                                    }}
                                >
                                    {isProcessing ? "Processing..." : `Pay $${total}`}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default PaymentButton;