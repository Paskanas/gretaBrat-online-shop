import { OptionsProps } from "@/types";
import AddToCartButton from "../AddToCartButton";

const Options = ({ art, sizes, cartItems, setCartItems }: OptionsProps) => {
    // const [cartItems, setCartItems] = useState([]);
    // useEffect(() => {
    //     localStorage.setItem("products", JSON.stringify(cartItems));
    // }, [cartItems]);

    // useEffect(() => {
    //     const items = JSON.parse(localStorage.getItem("products"));
    //     setCartItems(items);
    // }, []);

    return (
        <div className="mt-10">
            <h1 className="text-2xl" style={{ fontFamily: "Montserrat" }}>
                {art.title}
            </h1>

            <h2 className="text-xl my-4">{art.price} &euro;</h2>
            {/* <label htmlFor="">Select size</label> */}
            <label htmlFor="underline_select" className="sr-only">
                Select size
            </label>
            <select
                id="underline_select"
                className="block py-2.5 px-0 w-1/2 text-sm text-gray-500 bg-transparent border-2  border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                defaultValue={0}
            >
                <option value={0}>Select size</option>
                {sizes.size.map((size: string, index: number) => {
                    return (
                        <option key={index + 1} value={index + 1}>
                            {size}
                            {"+("}&euro;
                            {sizes.shipping[index] + ")"}
                        </option>
                    );
                })}
            </select>
            <AddToCartButton
                cartItems={cartItems}
                art={art}
                setCartItems={setCartItems}
            />
        </div>
    );
};

export default Options;
