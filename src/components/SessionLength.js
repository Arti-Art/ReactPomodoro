import React from "react";

function SessionLength(props) {
    function decreaseSession() {
        if (props.sessionLength > 1) {
            props.decreaseSession();
        }
    }
    function increaseSession() {
        if (props.sessionLength < 60) {
            props.increaseSession();
        }
    }
    return (
        <section>
            <h4>Session Length</h4>
            <section className="interval-container">
                <button
                    type="button"
                    disabled={props.isPlay === true ? "disabled" : ""}
                    onClick={decreaseSession}>
                    Down
                </button>
                <p className="interval-length">{props.sessionLength}</p>
                <button
                    type="button"
                    disabled={props.isPlay === true ? "disabled" : ""}
                    onClick={increaseSession}>
                    Up
                </button>
            </section>
        </section>
    );
}

export default SessionLength;
