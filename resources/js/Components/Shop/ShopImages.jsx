import React, { Component } from "react";

class ShopImages extends Component {
    render() {
        return (
            <>
                <img
                    src={this.props.art.photo_path}
                    alt={this.props.art.title}
                    loading="lazy"
                    className={this.props.imgHover}
                    onMouseOver={(e) =>
                        (e.currentTarget.src =
                            this.props.art.hover_photo_path ??
                            this.props.art.photo_path)
                    }
                    onMouseLeave={(e) =>
                        (e.currentTarget.src = this.props.art.photo_path)
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
}

export default ShopImages;
