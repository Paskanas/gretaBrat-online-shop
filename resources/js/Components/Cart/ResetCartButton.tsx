const ResetCartButton = ({ setCartItems }: { setCartItems: any }) => {
    return (
        <button
            onClick={() => {
                setCartItems([]);
            }}
            className="bg-fuchsia-400 px-4 py-2 rounded"
        >
            Clear cart
        </button>
    );
};

export default ResetCartButton;
