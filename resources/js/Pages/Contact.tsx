import { useState } from "react";
// import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import Header from "@/Components/Header";

import Footer from "@/Components/Footer";
import EmailForm from "@/Components/Contacts/EmailForm";
import MessageModal from "@/Components/Modals/MessageModal";

export default function Contact() {
    const [modal, setModal] = useState(false);
    const [modalMessage, setModalMessage] = useState([]);
    const [loading, setLoading] = useState(false);

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
                            loading={loading}
                            setLoading={setLoading}
                        />
                        <figure className="mt-4 ">
                            <img
                                className="w-full rounded"
                                src='/images/contacts/image1.png'
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
