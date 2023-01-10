import { useRef, useState } from "react";
import ShopImages from "./ShopImages";

const ShopComponent = (props) => {
    const [small, arts] = [props.small, props.arts];
    // const [textColorClass, setTextColorClass] = useState("black");
    const [showHoverId, setShowHoverId] = useState(-1);
    console.log(small);

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

    // const ImageToggleOnMouseOver = ({ img, hoverImg, title, id }) => {
    //     const imageRef = useRef(null);
    //     console.log(showHoverId);
    //     console.log(id);
    //     return (
    //         <div
    //             onMouseOver={() => {
    //                 setShowHoverId(id);
    //             }}
    //             onMouseLeave={() => {
    //                 setShowHoverId(-1);
    //             }}
    //         >
    //             <img
    //                 src={img}
    //                 alt={title}
    //                 className={
    //                     `${imgHover} ${
    //                         showHoverId === -1 ? "" : "hidden"
    //                     }` /*+ showHoverId === -1 ? "" : " hidden"*/
    //                 }
    //                 ref={imageRef}
    //             />
    //             <img
    //                 src={hoverImg}
    //                 alt={title}
    //                 className={
    //                     imgHover /*+ showHoverId === id ? " hidden" : ""*/
    //                 }
    //                 ref={imageRef}
    //             />
    //         </div>
    //     );
    // };

    const ImageChangeOnMouseOver = ({ art }) => {
        // console.log("showHoverId", showHoverId);
        return (
            <div
                className="flex flex-col justify-items-center justify-center"
                // onMouseOver={() => {
                //     setShowHoverId(art.id);
                // }}
                // onMouseLeave={() => {
                //     setShowHoverId(-1);
                // }}
            >
                <ShopImages
                    art={art}
                    imgHover={imgHover}
                    // showHoverId={showHoverId}
                />
                {/* <img
                    src={art.photo_path}
                    alt={art.title}
                    className={`${imgHover} ${
                        showHoverId === art.id ? "hidden" : ""
                    }`}
                    // onMouseOver={(e) =>
                    //     (e.currentTarget.src =
                    //         art.hover_photo_path ?? art.photo_path)
                    // }
                    // onMouseLeave={(e) => (e.currentTarget.src = art.photo_path)}
                />
                <img
                    src={art.hover_photo_path}
                    alt={art.title}
                    className={`${imgHover} ${
                        showHoverId === art.id ? "" : "hidden"
                    }`}
                    // onMouseOver={(e) =>
                    //     (e.currentTarget.src =
                    //         art.hover_photo_path ?? art.photo_path)
                    // }
                    // onMouseLeave={(e) => (e.currentTarget.src = art.photo_path)}
                /> */}
                {/* <ImageToggleOnMouseOver
                    img={art.photo_path}
                    hoverImg={art.hover_photo_path}
                    title={art.title}
                    showHover={art.showHover}
                    id={art.id}
                /> */}

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
                        console.log(art.hover_photo_path);
                        return (
                            <a
                                href={`/shop/${art.id}`}
                                className={`m-4 inline-block md:w-1/${showedItemsCount} w-full h-auto hover:text-purple-400 duration-500`}
                                key={index}
                            >
                                <ImageChangeOnMouseOver art={art} />
                                {/* <div className="flex flex-col justify-items-center justify-center">
                                    {!art.showHover && (
                                        // <img
                                        //     src={art.photo_path}
                                        //     alt={art.title}
                                        //     className={imgHover}
                                        //     onMouseOver={(e) =>
                                        //         (e.currentTarget.src =
                                        //             art.hover_photo_path ??
                                        //             art.photo_path)
                                        //     }
                                        //     onMouseLeave={(e) =>
                                        //         (e.currentTarget.src =
                                        //             art.photo_path)
                                        //     }
                                        // />
                                        <ImageToggleOnMouseOver
                                            img={art.photo_path}
                                            hoverImg={art.hover_photo_path}
                                            title={art.title}
                                        />
                                    )}
                                    <h2>
                                        <span className="font-bold border-b-2 border-black mt-3 w-10">
                                            {art.title}
                                        </span>
                                    </h2>
                                    {small && (
                                        <p className="text-black">
                                            {art.description}
                                        </p>
                                    )}
                                </div> */}
                            </a>
                        );
                    }
                })}
            </div>
        </div>
    );
    // }

    // return <h1>SHOP</h1>;
};

export default ShopComponent;
