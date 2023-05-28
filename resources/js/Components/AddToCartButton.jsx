const AddToCartButton = ({ cartItems, art, setCartItems }) => {
    const addItem = (art) => {
        const cartItemsTemp = [...cartItems];
        const artWithCount = { ...art, count: 1 };
        const foundItem = cartItems.find(({ id }) => id === art.id);

        if (foundItem) {
            const itemIndex = cartItemsTemp.findIndex(
                (item) => item.id === art.id
            );
            cartItemsTemp[itemIndex].count++;
            setCartItems(cartItemsTemp);
        } else {
            setCartItems([...cartItems, artWithCount]);
        }
    };

    return (
        <button
            className="uppercase bg-pink-400 mt-5 px-4 py-2 rounded hover:bg-pink-500 transition-colors duration-300"
            onClick={() => addItem(art)}
        >
            Add to bag
        </button>
    );
};

export default AddToCartButton;
