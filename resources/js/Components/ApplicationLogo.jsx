import React from "react";

export default function ApplicationLogo({ className }) {
    return (
        <img
            src="/images/Logo.png"
            alt="Greta Brat arts"
            itemProp="logo"
            className={className}
        />
    );
}
