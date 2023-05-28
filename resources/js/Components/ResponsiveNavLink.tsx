import React from "react";
import { InertiaLinkProps, Link } from "@inertiajs/react";

export default function ResponsiveNavLink({
    method = "get",
    as = "a",
    href,
    active = false,
    children,
}: InertiaLinkProps & { active?: boolean }) {
    return (
        <Link
            method={method}
            as={as}
            href={href}
            className={`w-full flex items-start pl-3 pr-4 py-2 border-l-4 ${active
                ? " text-black focus:outline-none active-bg-color"
                : "border-transparent text-black default-bg-color  "
                } text-base font-medium focus:outline-none transition duration-150 ease-in-out`}
        >
            {children}
        </Link>
    );
}
