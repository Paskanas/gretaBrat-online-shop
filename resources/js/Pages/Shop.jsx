import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/inertia-react";
import ShopComponent from "@/Components/Shop/ShopComponent";

export default function Home(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            // header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Shop</h2>}
        >
            <Head title="Shop" />
            <ShopComponent />
        </AuthenticatedLayout>
    );
}
