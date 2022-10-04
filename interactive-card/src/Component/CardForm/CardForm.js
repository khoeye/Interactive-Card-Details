import e from "express";
import React, { Fragment } from "react";
import './CardForm.css'

const CardForm = (props) =>{
    return(
        <Fragment>
            <form>
                <p>CARDHOLDER NAME</p>
                <input type={"text"} value={"e.g. Jane Appleseed"}></input>
                <p>CARD NUMBER</p>
                <input type={"text"} value={'e.g. 1234 5678 9123 0000'}></input>
                <p>EXP. DATE (MM/YY)</p>
                <input type={"text"} value={'MM'} ></input>
                <input type={"text"} value={'YY'}></input>
                <p>CVC</p>
                <input type={"text"} value={'e.g.'}></input><br></br>
                <button>Confirm</button>
            </form>
        </Fragment>
    )
} 

export default CardForm