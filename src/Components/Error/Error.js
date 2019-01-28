import React from "react";
import "./Error.css";

const Error = (props) => {
    return (
        <section className="Error">
            <h1>THERE WAS AN ERROR: {props.errorText}</h1>
        </section>
    )
}

export default Error;