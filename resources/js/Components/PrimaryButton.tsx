import React, { ButtonHTMLAttributes } from "react";

export default function PrimaryButton({
    type = "submit",
    className = "",
    processing,
    disabled,
    children,
}: ButtonHTMLAttributes<HTMLButtonElement> & { processing?: boolean }) {
    return (
        <button
            type={type}
            className={
                `inline-flex items-center px-4 py-2 ${disabled ? "bg-gray-500" : "bg-gray-900 active:bg-gray-900"
                }  border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest transition ease-in-out duration-150 ${processing && "opacity-25"
                } ` + className
            }
            disabled={processing || disabled}
        >
            {children}
        </button>
    );
}
