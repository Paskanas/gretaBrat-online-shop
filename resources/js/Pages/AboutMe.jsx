import React, { useEffect, useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/inertia-react";
import About from "../Components/AboutMe/About";
import Examples from "@/Components/AboutMe/Examples";
import Idea from "@/Components/AboutMe/Idea";

export default function AboutMe(props) {
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
            <Head title="About me" />

            <About
                photoPath="./images/personPhoto.png"
                photoAlt="Person photo"
            />
            <Examples />
            <Idea />
        </AuthenticatedLayout>
    );
}
