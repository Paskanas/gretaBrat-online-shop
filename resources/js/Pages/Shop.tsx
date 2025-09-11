import React, { useEffect, useState } from "react";
import { Head } from "@inertiajs/react";
import ShopComponent from "@/Components/Shop/ShopComponent";
import { ShopPageProps } from "@/types";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";

export default function Shop({ auth, arts }: ShopPageProps) {
    const [cartItems, setCartItems] = useState(
        JSON.parse(localStorage.getItem("products") ?? "[]")
    );
    
    useEffect(() => {
        localStorage.setItem("products", JSON.stringify(cartItems));
    }, [cartItems]);

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem("products") ?? "[]");
        setCartItems(items);
    }, []);

    return (
        <div>
            <Head title="Shop" />
            <Header />
            <ShopComponent arts={arts} />
            <div className="quote">
                <p className="text1">
                    Art washes away from the soul the dust of everyday life.
                </p>
                <p className="text2">- Pablo Picasso</p>
            </div>
            <Footer />
        </div>
    );
}
