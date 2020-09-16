/* eslint-disable prettier/prettier */
import React from "react";

function Button(props) {
    function myFunc() {
        console.log(`You just ckicked the button ${props.buttonType}`);
    }
    return (
        <button id={props.id} type="button" onClick={myFunc}>{props.buttonType}</button>
    );
}

export default Button;
