import React, { useEffect, useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import ResetCartButton from "@/Components/Cart/ResetCartButton";
import { PageProps } from "@/types";

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
        <AuthenticatedLayout
            user={auth.user}
        // cartItems={cartItems}
        >
            <Head title="Cart" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            You're logged in!
                        </div>
                    </div>
                </div>
            </div>
            <ResetCartButton setCartItems={setCartItems} />
        </AuthenticatedLayout>
    );
}
