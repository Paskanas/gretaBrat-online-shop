import { Art } from "@/types";
import React, { Component } from "react";

const ShopImages = ({ art, imgHover }: { art: Art, imgHover: string }) => {

    // // }
    // class ShopImages extends Component {
    // render() {
    return (
        <>
            <img
                src={art.photo_path}
                alt={art.title}
                loading="lazy"
                className={imgHover}
                onMouseOver={(e) =>
                (e.currentTarget.src =
                    art.hover_photo_path ??
                    art.photo_path)
                }
                onMouseLeave={(e) =>
                    (e.currentTarget.src = art.photo_path)
                }
            />
            {/* <img
                    src={this.props.art.hover_photo_path}
                    alt={this.props.art.title}
                    className={`${this.props.imgHover} ${
                        this.props.showHoverId === this.props.art.id
                            ? ""
                            : "hidden"
                    }`}
                    // onMouseOver={(e) =>
                    //     (e.currentTarget.src =
                    //         art.hover_photo_path ?? art.photo_path)
                    // }
                    // onMouseLeave={(e) => (e.currentTarget.src = art.photo_path)}
                /> */}
        </>
    );
}
// }

export default ShopImages;
