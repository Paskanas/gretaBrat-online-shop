import React, { PropsWithChildren, ReactNode, useEffect, useState } from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Link } from "@inertiajs/react";
import { User } from "@/types";

export default function Authenticated({ user, header, children/*, cartItems */ }: PropsWithChildren<{ user: User, header?: ReactNode/*, cartItems?: number*/ }>) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    // const cartCount = cartItems.reduce((accumuliator, object) => {
    //     return accumuliator + object.count;
    // }, 0);

    const handleLogout = () => {
        localStorage.removeItem("access_token");
    };

    return (
        <div className="min-h-screen bg-white">
            <nav className="bg-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex w-full justify-between">
                            <div className="shrink-0 flex items-center">
                                <Link href="/">
                                    <ApplicationLogo className="block h-9 w-auto text-gray-500" />
                                </Link>
                            </div>

                            <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                                <NavLink
                                    href={route("home")}
                                    active={route().current("home")}
                                >
                                    Home
                                </NavLink>
                                <NavLink
                                    href={route("shop")}
                                    active={route().current("shop")}
                                >
                                    Shop
                                </NavLink>
                                <NavLink
                                    href={route("about-me")}
                                    active={route().current("about-me")}
                                >
                                    About me
                                </NavLink>
                                <NavLink
                                    href={route("contact")}
                                    active={route().current("contact")}
                                >
                                    Contact
                                </NavLink>
                                {/* <NavLink
                                    href={route("cart")}
                                    active={route().current("cart")}
                                >
                                    Shopping bag ({cartCount})
                                </NavLink> */}
                                {!user && (
                                    <NavLink
                                        href={route("login")}
                                        active={route().current("login")}
                                    >
                                        Login
                                    </NavLink>
                                )}
                            </div>
                        </div>

                        <div className="hidden sm:flex sm:items-center sm:ml-6">
                            <div className="ml-3 relative">
                                {user && (
                                    <Dropdown>
                                        <Dropdown.Trigger>
                                            <span className="inline-flex rounded-md">
                                                <button
                                                    type="button"
                                                    className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                                >
                                                    {user.name}

                                                    <svg
                                                        className="ml-2 -mr-0.5 h-4 w-4"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                </button>
                                            </span>
                                        </Dropdown.Trigger>

                                        <Dropdown.Content>
                                            <Dropdown.Link
                                                href={route("logout")}
                                                method="post"
                                                as="button"
                                                onClick={handleLogout}
                                            >
                                                Log Out
                                            </Dropdown.Link>
                                            <a
                                                className="block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
                                                href={route("arts-index")}
                                            >
                                                Admin
                                            </a>
                                        </Dropdown.Content>
                                    </Dropdown>
                                )}
                            </div>
                        </div>

                        <div className="-mr-2 flex items-center sm:hidden">
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
                    </div>
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
                            href={route("shop")}
                            active={route().current("shop")}
                        >
                            Shop
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
                        <ResponsiveNavLink
                            href={route("cart")}
                            active={route().current("cart")}
                        >
                            Shoping bag
                        </ResponsiveNavLink>
                        <ResponsiveNavLink
                            href={route("login")}
                            active={route().current("login")}
                        >
                            Login
                        </ResponsiveNavLink>
                    </div>

                    {user && (
                        <div className="pt-4 pb-1 border-t border-gray-200">
                            <div className="px-4">
                                <div className="font-medium text-base text-gray-800">
                                    {user.name}
                                </div>
                                <div className="font-medium text-sm text-gray-500">
                                    {user.email}
                                </div>
                            </div>

                            <div className="mt-3 space-y-1">
                                <ResponsiveNavLink
                                    method="post"
                                    href={route("logout")}
                                    as="button"
                                    onClick={handleLogout}
                                >
                                    Log Out
                                </ResponsiveNavLink>
                            </div>
                        </div>
                    )}
                </div>
            </nav>

            <main>{children}</main>
        </div>
    );
}
