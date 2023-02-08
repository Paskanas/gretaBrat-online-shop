import ShopImages from "./ShopImages";

const ShopComponent = (props) => {
    const [small, arts] = [props.small, props.arts];
    const showedItemsCount = small
        ? arts.length > 3
            ? 3
            : arts.length
        : arts.length;

    const smallFormating = `flex ${
        showedItemsCount === 1 ? "justify-center" : "justify-between"
    } w-10/12 text-center flex-col md:flex-row`;

    const formatting = `grid grid-cols-3 gap-4 w-10/12 text-center`;

    const imgHover = small
        ? "rounded hover:contrast-75 duration-500"
        : "rounded";

    const ImageChangeOnMouseOver = ({ art }) => {
        return (
            <div className="flex flex-col justify-items-center justify-center">
                <ShopImages art={art} imgHover={imgHover} />

                <h2>
                    <span className="font-bold border-b-2 border-black mt-3 w-10">
                        {art.title}
                    </span>
                </h2>
                {small && <p className="text-black">{art.description}</p>}
            </div>
        );
    };

    return (
        <div className="flex flex-col items-center mt-1 w-full">
            <h1 className="uppercase text-4xl m-6">Limited edition prints</h1>
            <p className="uppercase">Serinity inspired collection</p>
            <div className={small ? smallFormating : formatting}>
                {arts.map((art, index) => {
                    art.showHover = false;
                    if (index < showedItemsCount) {
                        return (
                            <a
                                href={`/shop/${art.id}`}
                                className={`m-4 inline-block md:w-1/${showedItemsCount} w-full h-auto hover:text-purple-400 duration-500`}
                                key={index}
                            >
                                <ImageChangeOnMouseOver art={art} />
                            </a>
                        );
                    }
                })}
            </div>
        </div>
    );
};

export default ShopComponent;
