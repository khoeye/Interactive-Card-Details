import React from "react";
import './CardForm.css'

const CardForm = (props) => {
    return (
    <div className="formContainer">
            <form>
                <p>CARDHOLDER NAME</p>
                    <input type={"text"} value={"e.g. Jane Appleseed"}/>
                <p>CARD NUMBER</p>
                <input type={"text"} value={"e.g. 1234 5678 9123 0000"}/>
                <p>EXP. DATE (MM/YY)</p>
                <input type={"text"} value={'MM'}/>
                <input type={"text"} value={'YY'}/>
                <p>CVC</p>
                <input type={"text"} value={'e.g.'}/>
                <button>Confirm</button>
            </form>
        </div>
    )
} 

export default CardForm