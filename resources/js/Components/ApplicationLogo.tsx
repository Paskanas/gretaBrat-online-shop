import React from "react";

export default function ApplicationLogo({ className }: { className: string }) {
    return (
        <img
            src="/images/Logo.png"
            alt="Greta Brat arts"
            itemProp="logo"
            className={className}
        />
    );
}
