const ShopComponent = (props) => {
    if (props.small) {
        return (
            <div className="flex flex-col items-center mt-1">
                <h1 className="uppercase text-4xl m-6">
                    Limited edition prints
                </h1>
                <p className="uppercase">Serinity inspired collection</p>
                <div className="flex justify-between w-8/12 text-center">
                    <div className="w-1/3 m-4">
                        <h1 className="h-96 bg-pink-300">Image</h1>
                        <h2>Name</h2>
                        <p>Description</p>
                        <button className="bg-pink-200 p-4 pt-2 pb-2 rounded">
                            Add to cart
                        </button>
                    </div>
                    <div className="w-1/3 m-4">
                        <h1 className="h-96 bg-pink-300">Image</h1>
                        <h2>Name</h2>
                        <p>Description</p>
                        <button className="bg-pink-200 p-4 pt-2 pb-2 rounded">
                            Add to cart
                        </button>
                    </div>
                    <div className="w-1/3 m-4">
                        <h1 className="h-96 bg-pink-300">Image</h1>
                        <h2>Name</h2>
                        <p>Description</p>
                        <button className="bg-pink-200 p-4 pt-2 pb-2 rounded">
                            Add to cart
                        </button>
                    </div>
                </div>
            </div>
        );
    }
    return <h1>SHOP</h1>;
};

export default ShopComponent;
