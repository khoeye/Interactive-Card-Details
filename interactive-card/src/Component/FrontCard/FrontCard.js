import React, { useState } from "react";
import CardIcon from "./CardIconSVG";
import './FrontCard.css'



const FrontCard = (props) =>{


    return(
        <div className="frontCardContainer">
            <div className={"cardIcon"}>
                
            <CardIcon/>
            </div>
            <p className="cardNumber">{props.e.card}</p>
                <p className="cardName">{props.e.name}</p>
                <p className="cardExp">{props.e.expMM}/{props.e.expYY}</p>
        </div>
    )
} 

export default FrontCard