import React, { useEffect, useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/inertia-react";
import Footer from "@/Components/Footer";
import Gallery from "@/Components/Gallery/Gallery";
import Header from "@/Components/Header";

export default function Home(props) {
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
        <div>
            <Head title="Home" />
            <Header />
            <Gallery arts={props.arts} />
            <div className="quote">
                <h2 className="text1">
                    I found I could say things with color and shapes that I
                    couldn’t say any other way—things I had no words for.
                </h2>
                <h2 className="text2">- Georgia O Keeffe</h2>
            </div>
            <Footer />
        </div>
    );
}
