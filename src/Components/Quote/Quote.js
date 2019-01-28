import React from "react";
import "./Quote.css";

const Quote = (props) => {
    return (
        <section className="Quote">
            <h1>"{props.quote}"</h1>
            <h3>- {props.character}</h3>
        </section>
    )
}

export default Quote;