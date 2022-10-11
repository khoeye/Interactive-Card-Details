import React ,{ useState } from "react";
import './CardForm.css'

const CardForm = (props) => {

    //0=Incorrect Value entered, 1=No Value Entered, 2=ValidValue Entered
    const [cardNumberEmpty, setCardNumberEmpty] = useState(1)
    const [cardNumber, setCardNumber] = useState("0000 0000 0000 0000")
    props.onAddData(cardNumber)

    const cardNumberHandler = (event) =>{
        setCardNumber(event.target.value)
    }

    return (
    <div className="formContainer">
            <form>
                <p>CARDHOLDER NAME</p>
                    <input type={"text"} placeholder={"e.g. Jane Appleseed"}/>
                <p>CARD NUMBER</p>
                <input type={"text"} placeholder={"e.g. 1234 5678 9123 0000"} onChange={cardNumberHandler}/>
                <p>EXP. DATE (MM/YY)</p>
                <input type={"text"} placeholder={'MM'}/>
                <input type={"text"} placeholder={'YY'}/>
                <p>CVC</p>
                <input type={"text"} placeholder={'e.g. 123'}/>
                <button>Confirm</button>
            </form>
        </div>
    )
} 

export default CardForm