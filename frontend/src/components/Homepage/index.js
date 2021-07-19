import { useEffect, useState } from "react";
import './homepage.css';
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";


function Homepage() {


    return(
        <div className="background-pos">
            <div className="background-color"></div>
            <div className="background-pic">
                <h1 className="title" onClick="">Pictures for Gamers</h1>
                <button className="tryForFree">
                    Try for free
                </button>
            </div>
            <div className="aboutme">About me</div>
        </div>      
    )
}



export default Homepage;