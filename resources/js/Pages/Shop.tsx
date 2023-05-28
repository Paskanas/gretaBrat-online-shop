import React, { useEffect, useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import ShopComponent from "@/Components/Shop/ShopComponent";
import { ShopPageProps } from "@/types";

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
        <AuthenticatedLayout
            user={auth.user}
        // cartItems={cartItems}
        >
            <Head title="Shop" />
            <ShopComponent arts={arts} />
        </AuthenticatedLayout>
    );
}
