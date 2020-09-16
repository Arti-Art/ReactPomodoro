import React from "react";
import Timer from "./timer";
import Buttons from "./buttons";

function Core() {
    return (
        <div id="pom-clock">
            <Timer />
            <Buttons />
        </div>
    );
}

export default Core;
