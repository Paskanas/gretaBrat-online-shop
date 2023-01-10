import { Link } from "@inertiajs/inertia-react";
import React from "react";
import ApplicationLogo from "./ApplicationLogo";

const Header = () => {
    console.log(document);
    console.log(window.location.pathname);
    const pagePath = window.location.pathname;
    const page0 = "/";
    const page1 = "/about-me";
    const page2 = "/contact";

    return (
        <div>
            <div className="flex justify-center mt-3">
                <Link href="/">
                    <ApplicationLogo className="block h-9 w-auto text-gray-500" />
                </Link>
            </div>
            <div className="flex justify-center gap-14 mt-5 mb-4">
                <a href="/">
                    <h2
                        className={`${
                            pagePath === page0 ? "underline" : "hover:underline"
                        }  decoration-1 decoration decoration-black underline-offset-8 header-h2`}
                    >
                        Portfolio
                    </h2>
                </a>
                <a href="/about-me">
                    <h2
                        className={`${
                            pagePath === page1 ? "underline" : "hover:underline"
                        } decoration-1 decoration decoration-black underline-offset-8 header-h2`}
                    >
                        About
                    </h2>
                </a>
                <a href="/contact">
                    <h2
                        className={`${
                            pagePath === page2 ? "underline" : "hover:underline"
                        } decoration-1 decoration decoration-black underline-offset-8 header-h2`}
                    >
                        Contacts
                    </h2>
                </a>
            </div>
        </div>
    );
};

export default Header;
