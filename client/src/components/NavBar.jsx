import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {


    return (
        
        <nav>
            <div className="container justify-between">
            Shona Pugh
            <Link to="/contact">Contact</Link>
            <Link to="/home">Home</Link>
            </div>
        </nav>
        
    )
}