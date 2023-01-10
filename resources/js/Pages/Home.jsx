import React, { useEffect, useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/inertia-react";
// import Carousel from "@/Components/Home/Carousel";
// import ShopComponent from "@/Components/Shop/ShopComponent";
import OtherShops from "@/Components/Home/OtherShops";
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
        console.log(items.length);
    }, []);

    return (
        // <AuthenticatedLayout
        // auth={props.auth}
        // errors={props.errors}
        // cartItems={cartItems}
        // header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Home</h2>}
        // >
        <div>
            <Head title="Home" />
            <Header />
            {/* <Carousel /> */}
            {/* <ShopComponent small={true} arts={props.arts} /> */}
            <Gallery arts={props.arts} />
            <div className="quote">
                <h2 className="text1">
                    I found I could say things with color and shapes that I
                    couldn’t say any other way—things I had no words for.
                </h2>
                <h2 className="text2">- Georgia O Keeffe</h2>
            </div>
            {/* <OtherShops /> */}

            <Footer />
        </div>
        // </AuthenticatedLayout>
    );
}
