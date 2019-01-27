import React from "react";
import Quote from "../../Components/Quote/Quote";
import Name from "../../Components/Name/Name";
import Image from "../../Components/Image/Image";
import "./Card.css";

const Card = () => {
    return (
        <section className="Card">
            <Quote />
            <br />
            <Name />
            <Image />
        </section>
    )
}

export default Card;