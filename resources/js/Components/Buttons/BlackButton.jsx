import React from "react";
import { ClipLoader } from "react-spinners";

const BlackButton = ({ handleClick, loading, type, loaderSize }) => {
    return (
        <button
            // type="submit"
            type={type}
            className="bg-black text-white w-28 p-4 py-2 rounded leading-7 flex align-middle justify-center"
            onClick={handleClick}
        >
            {loading ? (
                <ClipLoader
                    color="#e31ed5"
                    cssOverride={{}}
                    loading
                    size={loaderSize}
                />
            ) : (
                "Submit"
            )}
        </button>
    );
};

export default BlackButton;
