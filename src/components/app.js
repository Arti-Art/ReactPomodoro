/*
.* React Test App
.* /src/components/root.js - Root Component
.* coded by Arti-Art
.* started on 09/09/2020
*/

import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import BreakInterval from "./BreakInterval";
import SessionLength from "./SessionLength";
import Timer from "./Timer";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            breakLength: 5,
            sessionLength: 25,
            timerMinute: 25,
        };
    }
    render() {
        return (
            <main>
                <Header title="Pomodoro Clock" />
                <section className="interval-length-container">
                    <BreakInterval breakInterval={this.state.breakLength} />
                    <SessionLength sessionLength={this.state.sessionLength} />
                </section>
                <Timer timerMinute={this.state.timerMinute} />
                <Footer />
            </main>
        );
    }
}

export default App;
