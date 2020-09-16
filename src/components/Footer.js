import React from "react";

function Footer() {
    const date = new Date();
    const year = date.getFullYear();
    return <p>{year} - Artyom Kouznetsov</p>;
}

export default Footer;
