import React from "react";
import Button from "./button";

function Buttons() {
    return (
        <div id="pom-buttons">
            <Button buttonType="START" id="buttStart" />
            <Button buttonType="PAUSE" id="buttPause" />
            <Button buttonType="STOP" id="buttStop" />
        </div>
    );
}

export default Buttons;
