import React, { useEffect, useState } from "react";
import { Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import CartComponent from "@/Components/Cart/CartComponent";

export default function Cart({ auth, errors }: PageProps) {
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
            <Head title="Cart" />
            <Header />
            <CartComponent cartItems={cartItems} setCartItems={setCartItems} />
            <Footer />
        </div>
    );
}
