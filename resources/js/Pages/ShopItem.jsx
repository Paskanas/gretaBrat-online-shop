import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/inertia-react";
import Gallery from "@/Components/ShopItem/Gallery";
import Options from "@/Components/ShopItem/Options";

const ShopItem = (props) => {
    console.log(props);
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            // header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Shop</h2>}
        >
            <Head title="Shop" />
            <div className="grid grid-cols-12">
                <div className="col-start-1 col-end-9 ">
                    <Gallery art={props.art} />
                </div>
                <div className="col-start-9 col-end-13">
                    <Options art={props.art} sizes={props.sizes} />
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default ShopItem;
