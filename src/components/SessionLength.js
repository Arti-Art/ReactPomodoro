import React from "react";

function SessionLength(props) {
    return (
        <section>
            <h4>Session Length</h4>
            <section className="interval-container">
                <button type="button">Down</button>
                <p className="interval-length">{props.sessionLength}</p>
                <button type="button">Up</button>
            </section>
        </section>
    );
}

export default SessionLength;
