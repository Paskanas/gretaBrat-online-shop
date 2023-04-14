import { Link } from "@inertiajs/inertia-react";
import React, { useState } from "react";
import ApplicationLogo from "./ApplicationLogo";
import ResponsiveNavLink from "./ResponsiveNavLink";

const Header = () => {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    const pagePath = window.location.pathname;
    const homePage = "/";
    const aboutPage = "/about-me";
    const contactPage = "/contact";

    return (
        <div>
            <nav className="bg-white border-b border-gray-100 py-2 mb-3 sm:hidden ">
                <div className="-mr-2 flex  items-center justify-between w-full px-4 ">
                    <div className="flex">
                        {pagePath === homePage ? (
                            <h1 itemScope>
                                <a href={route("home")}>
                                    <ApplicationLogo className="block h-9 w-auto text-black" />
                                </a>
                            </h1>
                        ) : (
                            <a href={route("home")}>
                                <ApplicationLogo className="block h-9 w-auto text-black" />
                            </a>
                        )}
                    </div>
                    <button
                        onClick={() =>
                            setShowingNavigationDropdown(
                                (previousState) => !previousState
                            )
                        }
                        className="inline-flex items-center justify-center p-2 rounded-md text-black  default-bg-color  focus:outline-none  transition duration-150 ease-in-out"
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
                    {pagePath === homePage ? (
                        <h1 itemScope>
                            <a href={route("home")}>
                                <ApplicationLogo className="block h-9 w-auto text-black" />
                            </a>
                        </h1>
                    ) : (
                        <a href={route("home")}>
                            <ApplicationLogo className="block h-9 w-auto text-black" />
                        </a>
                    )}
                </div>
                <div className="flex justify-center gap-14 mt-5 mb-4">
                    <a href={route("home")}>
                        <h2
                            className={`${
                                pagePath === homePage
                                    ? "underline"
                                    : "hover:underline"
                            }  decoration-1 decoration decoration-inherit underline-offset-8 header-h2`}
                        >
                            Portfolio
                        </h2>
                    </a>
                    <a href={route("about-me")}>
                        <h2
                            className={`${
                                pagePath === aboutPage
                                    ? "underline"
                                    : "hover:underline"
                            } decoration-1 decoration decoration-inherit underline-offset-8 header-h2`}
                        >
                            About
                        </h2>
                    </a>
                    <a href={route("contact")}>
                        <h2
                            className={`${
                                pagePath === contactPage
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
