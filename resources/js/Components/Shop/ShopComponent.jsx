import { useState } from "react";

const ShopComponent = (props) => {
    const [small, arts] = [props.small, props.arts];
    const [textColorClass, setTextColorClass] = useState("black");
    console.log(arts);
    if (small) {
        const showedItemsCount = arts.length > 3 ? 3 : arts.length;

        const handleHover = (event, index, mouseOn) => {
            // if (mouseOn) {
            //     event.target.src = arts[index].hover_photo_path;
            // } else {
            //     event.target.src = arts[index].photo_path;
            // }
        };

        return (
            <div className="flex flex-col items-center mt-1 w-full">
                <h1 className="uppercase text-4xl m-6">
                    Limited edition prints
                </h1>
                <p className="uppercase">Serinity inspired collection</p>
                <div
                    className={`flex ${
                        showedItemsCount === 1
                            ? "justify-center"
                            : "justify-between"
                    } w-10/12 text-center flex-col md:flex-row`}
                >
                    {arts.map((art, index) => {
                        art.showHover = false;
                        if (index < showedItemsCount) {
                            return (
                                <a
                                    href={`/shop/${art.id}`}
                                    className={`m-4 inline-block md:w-1/${showedItemsCount} w-full h-auto hover:text-purple-400 duration-500`}
                                    key={index}
                                    // onMouseOver={(art.showHover = true)}
                                    // onMouseLeave={(art.showHover = false)}
                                >
                                    {/* <div
                                        className=" 
                                        xl:h-[368px] xl:w-[288px]
                                        lg:h-[276px] lg:w-[216px]
                                        md:h-[245px] md:w-[192px]
                                        sm:h-[368px] sm:w-[288px]
                                        h-[368px] w-[288px]
                                        bg-center bg-cover rounded hover:contrast-75  duration-500"
                                        // style={{
                                        //     backgroundImage: `url('${art.photo_path}')`,
                                        // }}
                                    ></div> */}
                                    <div className="flex flex-col justify-items-center justify-center">
                                        {!art.showHover && (
                                            <img
                                                src={art.photo_path}
                                                alt={art.title}
                                                className="rounded hover:contrast-75 duration-500"
                                                // onMouseOver={() => {
                                                //     handleHover(event, index, true);
                                                // }}
                                                // onMouseLeave={() => {
                                                //     handleHover(
                                                //         event,
                                                //         index,
                                                //         false
                                                //     );
                                                // }}
                                            />
                                        )}
                                        {/*{art.showHover && (
                                        <img
                                            src={art.hover_photo_path}
                                            alt={art.title}
                                            className="h-96 rounded"
                                            // onMouseOver={() => {
                                            //     handleHover(event, index, true);
                                            // }}
                                            // onMouseLeave={() => {
                                            //     handleHover(
                                            //         event,
                                            //         index,
                                            //         false
                                            //     );
                                            // }}
                                        />
                                    )} */}
                                        <h2>
                                            <span className="font-bold border-b-2 border-black mt-3 w-10">
                                                {art.title}
                                            </span>
                                        </h2>
                                        <p className="text-black">
                                            {art.description}
                                        </p>
                                    </div>
                                </a>
                            );
                        }
                    })}
                </div>
            </div>
        );
    }
    return <h1>SHOP</h1>;
};

export default ShopComponent;
