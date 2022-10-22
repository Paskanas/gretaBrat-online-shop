import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/inertia-react";
import About from "../Components/AboutMe/About";

export default function AboutMe(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            // header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="About me" />

            <About />
        </AuthenticatedLayout>
    );
}
