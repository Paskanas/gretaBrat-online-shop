const OtherShops = () => {
    return (
        <div className="flex flex-col items-center mt-14">
            <h1 className="m-6 h1-color">Collect NFT</h1>
            <p>Become an owner of Non-fungible token.</p>
            <div className="flex md:justify-around flex-col md:flex-row items-center w-8/12 text-center my-6">
                <div className="w-full md:w-48 flex justify-center">
                    <a
                        href="https://makersplace.com/gretabrat/"
                        className="my-3 md:p-6 "
                    >
                        <img
                            src="images/NFT shops logos/MakersPlace.png"
                            alt="Makersplace"
                        />
                    </a>
                </div>
                <div className="w-48 flex justify-center">
                    <a
                        href="https://knownorigin.io/gretabrat"
                        className="my-3 md:p-6"
                    >
                        <img
                            src="images/NFT shops logos/KnownOrigin.png"
                            alt="Knownorigin"
                        />
                    </a>
                </div>
                <div className="w-48 flex justify-center">
                    <a
                        href="https://foundation.app/@gretabrat"
                        className="my-3 md:p-6"
                    >
                        <img
                            src="images/NFT shops logos/Foundation.png"
                            alt="Foundation"
                        />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default OtherShops;
