import { Link } from "@inertiajs/inertia-react";
import React, { useState } from "react";
import ApplicationLogo from "./ApplicationLogo";
import ResponsiveNavLink from "./ResponsiveNavLink";

const Header = () => {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    const pagePath = window.location.pathname;
    const page0 = "/";
    const page1 = "/about-me";
    const page2 = "/contact";

    return (
        <div>
            <nav className="bg-white border-b border-gray-100 py-2 mb-3 sm:hidden ">
                <div className="-mr-2 flex  items-center justify-between w-full px-4 ">
                    <div className="flex">
                        <Link href="/">
                            <ApplicationLogo className="block h-9 w-auto text-gray-500" />
                        </Link>
                    </div>
                    <button
                        onClick={() =>
                            setShowingNavigationDropdown(
                                (previousState) => !previousState
                            )
                        }
                        className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                    >
                        <svg
                            className="h-6 w-6"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <path
                                className={
                                    !showingNavigationDropdown
                                        ? "inline-flex"
                                        : "hidden"
                                }
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                            <path
                                className={
                                    showingNavigationDropdown
                                        ? "inline-flex"
                                        : "hidden"
                                }
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>
                <div
                    className={
                        (showingNavigationDropdown ? "block" : "hidden") +
                        " sm:hidden"
                    }
                >
                    <div className="pt-2 pb-3 space-y-1">
                        <ResponsiveNavLink
                            href={route("home")}
                            active={route().current("home")}
                        >
                            Home
                        </ResponsiveNavLink>
                        <ResponsiveNavLink
                            href={route("about-me")}
                            active={route().current("about-me")}
                        >
                            About me
                        </ResponsiveNavLink>
                        <ResponsiveNavLink
                            href={route("contact")}
                            active={route().current("contact")}
                        >
                            Contact
                        </ResponsiveNavLink>
                    </div>
                </div>
            </nav>
            <div className="hidden sm:block sm:items-center sm:ml-6">
                <div className="flex justify-center mt-3">
                    <Link href="/">
                        <ApplicationLogo className="block h-9 w-auto text-gray-500" />
                    </Link>
                </div>
                <div className="flex justify-center gap-14 mt-5 mb-4">
                    <a href="/">
                        <h2
                            className={`${
                                pagePath === page0
                                    ? "underline"
                                    : "hover:underline"
                            }  decoration-1 decoration decoration-inherit underline-offset-8 header-h2`}
                        >
                            Portfolio
                        </h2>
                    </a>
                    <a href="/about-me">
                        <h2
                            className={`${
                                pagePath === page1
                                    ? "underline"
                                    : "hover:underline"
                            } decoration-1 decoration decoration-inherit underline-offset-8 header-h2`}
                        >
                            About
                        </h2>
                    </a>
                    <a href="/contact">
                        <h2
                            className={`${
                                pagePath === page2
                                    ? "underline"
                                    : "hover:underline"
                            } decoration-1 decoration decoration-inherit underline-offset-8 header-h2`}
                        >
                            Contacts
                        </h2>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Header;
