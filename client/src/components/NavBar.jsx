import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {


    return (
        
        <nav className="pb-4">
            <div className="font-serif container justify-between flex pt-4">
            <div className="">  
            Shona Pugh
            </div> 
            <div className="flex">
            <Link className="mr-2" to="/contact">Contact</Link>
            <Link to="/home">Home</Link>
            </div>
            </div>
        </nav>
        
    )
}