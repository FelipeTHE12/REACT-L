import React from "react";

function Footer(){

    const year = new Date().getFullYear();
    return (
    <footer>
        <p>12 - {year}</p>
    </footer>);
        
};

export default Footer;