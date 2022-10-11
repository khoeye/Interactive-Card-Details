import React from "react";
import CardIcon from "./CardIconSVG";
import './FrontCard.css'

const FrontCard = (props) =>{
    return(
        <div className="frontCardContainer">
            <div className={"cardIcon"}>
            <CardIcon/>
            </div>
        </div>
    )
} 

export default FrontCard