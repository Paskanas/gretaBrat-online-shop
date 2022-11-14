const AddToCartButton = ({ cartItems, art, setCartItems }) => {
    console.log(cartItems);
    const addItem = (art) => {
        const cartItemsTemp = [...cartItems];
        const artWithCount = { ...art, count: 1 };
        const foundItem = cartItems.find(({ id }) => id === art.id);

        console.log(
            cartItems.find(({ id }) => {
                return id === art.id;
            })
        );
        if (foundItem) {
            console.log("found");
            console.log(cartItemsTemp.findIndex((item) => item.id === art.id));
            const itemIndex = cartItemsTemp.findIndex(
                (item) => item.id === art.id
            );
            cartItemsTemp[itemIndex].count++;
            setCartItems(cartItemsTemp);
        } else {
            console.log("not found");
            console.log(foundItem);
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
