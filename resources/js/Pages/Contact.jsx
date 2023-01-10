import React, { useEffect, useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/inertia-react";
import Header from "@/Components/Header";

import Img1 from "../../../public/images/contacts/image1.png";
import Footer from "@/Components/Footer";

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
        // <AuthenticatedLayout
        //     auth={props.auth}
        //     errors={props.errors}
        //     cartItems={cartItems}
        //     // header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Home</h2>}
        // >
        <div>
            <Head title="Contact" />
            <Header />
            <div className="flex w-full justify-center">
                <div className="flex flex-col  w-8/12">
                    <h1 className="contact-h1 text-center">Get in touch</h1>
                    <form action="" method="post" className="flex flex-col">
                        <label htmlFor="">Name*</label>
                        <input
                            type="text"
                            className="bg-neutral-100 placeholder:text-slate-400 border-none mb-4"
                            placeholder="Your name"
                        />
                        <label htmlFor="">Last name</label>
                        <input
                            type="text"
                            className="bg-neutral-100 placeholder:text-slate-400 border-none mb-4"
                            placeholder="Your last name"
                        />
                        <label htmlFor="">Email*</label>
                        <input
                            type="email"
                            className="bg-neutral-100 placeholder:text-slate-400 border-none mb-4"
                            placeholder="Your email address"
                        />
                        <label htmlFor="">Message*</label>
                        <textarea
                            type="text"
                            className="bg-neutral-100 min-h-[4rem] placeholder:text-slate-400 border-none mb-4"
                            placeholder="Enter your message"
                        />
                        <div className="flex justify-center">
                            <button
                                type="submit"
                                className="bg-black text-white w-28 p-4 py-2 rounded"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                    <figure className="mt-4 ">
                        <img src={Img1} alt="Contacts image" />
                    </figure>
                </div>
            </div>
            <Footer />
        </div>
        // </AuthenticatedLayout>
    );
}
