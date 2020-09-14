/*
.* React Test App
.* /src/components/root.js - Root Component
.* coded by Arti-Art
.* started on 09/09/2020
*/

import React from "react";
import Header from "./header";
import Core from "./core";
import Footer from "./footer";

function RootComponent() {
    return (
        <div id="pom-container">
            <Header />
            <Core />
            <Footer />
        </div>
    );
}

export default RootComponent;
