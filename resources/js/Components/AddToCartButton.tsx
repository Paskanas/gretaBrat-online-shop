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
            className="w-full font-semibold py-3 px-6 rounded-lg transition duration-200 uppercase tracking-wide default-font"
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
            onClick={() => addItem(art)}
        >
            Add to Cart
        </button>
    );
};

export default AddToCartButton;
