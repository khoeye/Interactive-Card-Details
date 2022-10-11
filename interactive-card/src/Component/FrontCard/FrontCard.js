import React, { useState } from "react";
import CardIcon from "./CardIconSVG";
import './FrontCard.css'



const FrontCard = (props) =>{

    return(
        <div className="frontCardContainer">
            <div className={"cardIcon"}>
                
            <CardIcon/>
            </div>
            <h1 className="cardNumber">{props.e}</h1>
        </div>
    )
} 

export default FrontCard