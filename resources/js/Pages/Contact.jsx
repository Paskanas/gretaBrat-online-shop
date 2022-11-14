import React, { useEffect, useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/inertia-react";

export default function Contact(props) {
    const [cartItems, setCartItems] = useState(
        JSON.parse(localStorage.getItem("products")) ?? []
    );
    useEffect(() => {
        localStorage.setItem("products", JSON.stringify(cartItems));
    }, [cartItems]);

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem("products"));
        setCartItems(items);
        console.log(items.length);
    }, []);

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            cartItems={cartItems}
            // header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Home</h2>}
        >
            <Head title="Contact" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            You're logged in!
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
