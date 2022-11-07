import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/inertia-react";
import Carousel from "@/Components/Home/Carousel";
import ShopComponent from "@/Components/Shop/ShopComponent";
import OtherShops from "@/Components/Home/OtherShops";
import Footer from "@/Components/Footer";

export default function Home(props) {
    const [cartItemsCount, setCartItemsCount] = useState(0);

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            cartItemsCount={cartItemsCount}
            // header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Home</h2>}
        >
            <Head title="Home" />

            <Carousel />
            <ShopComponent small={true} arts={props.arts} />
            <OtherShops />

            <Footer />
        </AuthenticatedLayout>
    );
}
