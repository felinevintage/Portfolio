import React from "react";
import {Link} from "react-router-dom"
import archie from "../assets/Archie.jpg";

export default function Home() {


    return(
        <div>
            <h1 className="text-3xl font-bold">Full Stack Developer</h1>
            <h2>Based in London.</h2>
            <h2>Currently using React.js</h2>
            <div>
                <img src={archie} />
            </div>
        </div>
    )
}