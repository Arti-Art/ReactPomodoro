import React from "react";

function BreakInterval(props) {
    function decreaseCounter() {
        if (props.breakInterval > 1) {
            props.decreaseBreak();
        }
    }
    function increaseCounter() {
        if (props.breakInterval < 60) {
            props.increaseBreak();
        }
    }
    return (
        <section>
            <h4>Break Length</h4>
            <section className="interval-container">
                <button type="button" onClick={decreaseCounter}>
                    Down
                </button>
                <p className="interval-length">{props.breakInterval}</p>
                <button type="button" onClick={increaseCounter}>
                    Up
                </button>
            </section>
        </section>
    );
}

export default BreakInterval;
