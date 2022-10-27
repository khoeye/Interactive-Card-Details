import React from "react";
import './BackCard.css'

const BackCard = (props) =>{
    return(
        <div className="backCardContainer">
            <h1 className="cardCvc">{props.e.cvc}</h1>
        </div>
    )
} 

export default BackCard