import React, { useEffect, useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/inertia-react";
import Header from "@/Components/Header";

import Img1 from "../../../public/images/contacts/image1.png";
import Footer from "@/Components/Footer";
import EmailForm from "@/Components/Contacts/EmailForm";
import MessageModal from "@/Components/Modals/MessageModal";

export default function Contact(props) {
    // const [cartItems, setCartItems] = useState(
    //     JSON.parse(localStorage.getItem("products")) ?? []
    // );
    const [modal, setModal] = useState(false);
    const [modalMessage, setModalMessage] = useState([]);
    const [loading, setLoading] = useState(false);

    // useEffect(() => {
    //     localStorage.setItem("products", JSON.stringify(cartItems));
    // }, [cartItems]);

    // useEffect(() => {
    //     const items = JSON.parse(localStorage.getItem("products"));
    //     setCartItems(items);
    // }, []);

    return (
        <>
            <MessageModal
                modal={modal}
                setModal={setModal}
                modalMessage={modalMessage}
            />
            <div>
                <Head title="Contact" />
                <Header />
                <div className="flex w-full justify-center">
                    <div className="flex flex-col w-10/12 md:w-8/12">
                        <EmailForm
                            modal={modal}
                            loading={loading}
                            setLoading={setLoading}
                            setModal={setModal}
                            setModalMessage={setModalMessage}
                            modalMessage={modalMessage}
                        />
                        <figure className="mt-4 ">
                            <img
                                className="w-full"
                                src={Img1}
                                alt="Contacts image"
                            />
                        </figure>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}
