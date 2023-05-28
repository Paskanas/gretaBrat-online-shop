import React, { useEffect, useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/inertia-react";
import Gallery from "@/Components/ShopItem/Gallery";
import Options from "@/Components/ShopItem/Options";

const ShopItem = (props) => {
    const [cartItems, setCartItems] = useState(
        JSON.parse(localStorage.getItem("products")) ?? []
    );
    useEffect(() => {
        localStorage.setItem("products", JSON.stringify(cartItems));
    }, [cartItems]);

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem("products"));
        setCartItems(items);
    }, []);
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            cartItems={cartItems}
        >
            <Head title="Shop" />
            <div className="grid grid-cols-12">
                <div className="col-start-1 col-end-9 ">
                    <Gallery art={props.art} />
                </div>
                <div className="col-start-9 col-end-13">
                    <Options
                        art={props.art}
                        sizes={props.sizes}
                        cartItems={cartItems}
                        setCartItems={setCartItems}
                    />
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default ShopItem;
