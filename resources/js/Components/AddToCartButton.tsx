import { Art } from "@/types";

const AddToCartButton = ({ cartItems, art, setCartItems }: { cartItems: any, art: Art, setCartItems: React.Dispatch<React.SetStateAction<any>> }) => {
    const addItem = (art: Art) => {
        const cartItemsTemp = [...cartItems];
        const cartItem = { 
            art_id: art.id,
            title: art.title,
            price: art.price,
            size: ["30x20"], // Default size - in real app this would come from size selection
            count: 1 
        };
        const foundItem = cartItems.find(({ art_id }: { art_id: number }) => art_id === art.id);

        if (foundItem) {
            const itemIndex = cartItemsTemp.findIndex(
                (item) => item.art_id === art.id
            );
            cartItemsTemp[itemIndex].count++;
            setCartItems(cartItemsTemp);
        } else {
            setCartItems([...cartItems, cartItem]);
        }
    };

    return (
        <button
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 uppercase tracking-wide"
            onClick={() => addItem(art)}
        >
            Add to Cart
        </button>
    );
};

export default AddToCartButton;
