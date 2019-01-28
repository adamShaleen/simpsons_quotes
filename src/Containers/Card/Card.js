import React from "react";
import Button from "../../Components/Button/Button";
import Quote from "../../Components/Quote/Quote";
import Image from "../../Components/Image/Image";
import "./Card.css";

const Card = (props) => {
    return (
        <section className="Card">
            <Quote quote={props.data.quote} character={props.data.character} />
            <Image image={props.data.image}/>
            <Button onClick={props.onClick}/>
        </section>
    )
}

export default Card;