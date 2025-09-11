import React, { useEffect, useState } from "react";
import { Head } from "@inertiajs/react";
import Gallery from "@/Components/ShopItem/Gallery";
import Options from "@/Components/ShopItem/Options";
import { ShopItemPageProps } from "@/types";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";

const ShopItem = ({ auth, art, sizes }: ShopItemPageProps) => {
    const [cartItems, setCartItems] = useState(
        JSON.parse(localStorage.getItem("products") ?? "[]")
    );
    
    useEffect(() => {
        localStorage.setItem("products", JSON.stringify(cartItems));
    }, [cartItems]);

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem("products") ?? '[]');
        setCartItems(items);
    }, []);
    
    return (
        <div>
            <Head title={`${art.title} - Shop`} />
            <Header />
            <div className="flex flex-col lg:flex-row max-w-7xl mx-auto px-4 py-8 gap-8">
                <div className="lg:w-2/3">
                    <Gallery art={art} />
                </div>
                <div className="lg:w-1/3">
                    <Options
                        art={art}
                        sizes={sizes}
                        cartItems={cartItems}
                        setCartItems={setCartItems}
                    />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ShopItem;
