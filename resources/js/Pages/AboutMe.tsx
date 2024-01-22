import { useEffect, useState } from "react";
import { Head } from "@inertiajs/react";
import About from "../Components/AboutMe/About";
import Achievements from "@/Components/AboutMe/Achievements";
import Header from "@/Components/Header";
import OtherShops from "@/Components/AboutMe/OtherShops";
import Footer from "@/Components/Footer";

export default function AboutMe() {

    // const [cartItems, setCartItems] = useState(
    //     JSON.parse(localStorage.getItem("products") ?? "[]")
    // );
    // useEffect(() => {
    //     localStorage.setItem("products", JSON.stringify(cartItems));
    // }, [cartItems]);

    // useEffect(() => {
    //     const items = JSON.parse(localStorage.getItem("products") ?? "[]");
    //     setCartItems(items);
    // }, []);

    return (
        <div>
            <Header />
            <Head title="About me" />

            <About
                photoPath="./images/personPhoto.png"
                photoAlt="Person photo"
            />
            <Achievements
                photoPath="./images/achievementPhoto.png"
                photoAlt="Achievement photo"
            />
            <OtherShops />
            <Footer />
        </div>
    );
}
