import React from "react";
import FrontCard from "../FrontCard/FrontCard";
import BackCard from "../BackCard/BackCard";
import './CardContainer.css'

const CardContainer = (props) =>{

    return(
        <div className="cardContainer">
            <FrontCard e={props.cardProp}/>
            <BackCard e={props.cardProp}/>
        </div>
    )
} 

export default CardContainer