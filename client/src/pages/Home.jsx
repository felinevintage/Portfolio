import React from "react";
import {Link} from "react-router-dom"
import archie from "../assets/Archie.jpg";

export default function Home() {


    return(
        <div className=" flex h-screen font-serif mt-16 pb-14">
            <div className="columns-2 container">
            <div className="mt-4 pr-6">
                <img className="shadow-2xl outline-double outline-8 outline-offset-2 rounded-tr-lg rounded-br-lg rounded-bl-lg" src={archie} />
            </div>
            <h1 className="text-3xl pb-4 font-bold">Full Stack Developer</h1>
            <h2 className="pb-4">Based in London.</h2>
            <h2>Currently using React.js</h2>
            
            </div>
        </div>
    )
}