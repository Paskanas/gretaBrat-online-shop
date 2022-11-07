const Options = (props) => {
    return (
        <div className="mt-10">
            <h1 className="text-2xl" style={{ fontFamily: "Montseraat" }}>
                {props.art.title}
            </h1>

            <h2 className="text-xl my-4">{props.art.price} &euro;</h2>
            {/* <label htmlFor="">Select size</label> */}
            <label htmlFor="underline_select" className="sr-only">
                Select size
            </label>
            <select
                id="underline_select"
                className="block py-2.5 px-0 w-1/2 text-sm text-gray-500 bg-transparent border-2  border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                defaultValue={0}
            >
                <option value={0} selected>
                    Select size
                </option>
                {props.sizes.size.map((size, index) => {
                    return (
                        <option key={index + 1} value={index + 1}>
                            {size}
                            {"+("}&euro;
                            {props.sizes.shipping[index] + ")"}
                        </option>
                    );
                })}
            </select>
            <button className="uppercase bg-pink-400 mt-5 px-4 py-2 rounded hover:bg-pink-500 transition-colors duration-300">
                Add to bag
            </button>
        </div>
    );
};

export default Options;
