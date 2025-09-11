const ResetCartButton = ({ setCartItems }: { setCartItems: any }) => {
    return (
        <button
            onClick={() => {
                setCartItems([]);
            }}
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-lg transition duration-200 default-font"
        >
            Clear Cart
        </button>
    );
};

export default ResetCartButton;
