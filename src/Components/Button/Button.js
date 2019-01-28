import React from 'react';
import "./Button.css";

const Button = (props) => {
    return (
        <section className="Button">
            <button className="btn" onClick={props.onClick}>Generate Simpsons Wisdom</button>
        </section>
    )
}

export default Button;