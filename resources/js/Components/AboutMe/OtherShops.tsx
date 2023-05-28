const OtherShops = () => {
    return (
        <div className="flex flex-col items-center mt-14">
            <h2 className="m-10 h2-color">Collect NFT</h2>
            <p>Become an owner of Non-fungible token.</p>
            <div className="flex md:justify-around flex-col md:flex-row items-center w-8/12 text-center my-6">
                <div className="w-full md:w-48 flex justify-center">
                    <a
                        href="https://makersplace.com/gretabrat/"
                        target="_blank"
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
                        target="_blank"
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
                        target="_blank"
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
