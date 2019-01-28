import React from "react";
import "./Image.css";

const Image = (props) => {
    return (
        <section className="Image">
            <img alt={props.image} className="Image" src={props.image} />
        </section>
    )
}

export default Image;