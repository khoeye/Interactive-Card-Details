import React, { useState } from "react";
import CardIcon from "./CardIconSVG";
import './FrontCard.css'



const FrontCard = (props) =>{


    return(
        <div className="frontCardContainer">
            <div className={"cardIcon"}>
                
            <CardIcon/>
            </div>
            <h1 className="cardNumber">{props.e.card}</h1>
            <p>{props.e.name}</p> 
            <span>
                <p>{props.e.expMM}/{props.e.expYY}</p>
            </span>
        </div>
    )
} 

export default FrontCard