import React ,{ useState } from "react";
import './CardForm.css'

const CardForm = (props) => {

    //0=Incorrect Value entered, 1=No Value Entered, 2=ValidValue Entered
    const [cardNumberEmpty, setCardNumberEmpty] = useState(1)
    const [cardForm, setCardForm] = useState(
        {  
     }
    )
    props.onAddData(cardForm)

    const cardNameHandler = (event) =>{
        setCardForm(prevState =>{
            return ({...prevState, name: event.target.value})
    })}
    const cardNumberHandler = (event) =>{
        setCardForm(prevState =>{
            return ({...prevState, card: event.target.value})
    })}
    const cardexpMMHandler = (event) =>{
        setCardForm(prevState =>{
            return ({...prevState,expMM: event.target.value})
    })}
    const cardexpYYHandler = (event) =>{
        setCardForm(prevState =>{
            return ({...prevState,expYY: event.target.value})
    })}
    const cardCvcHandler = (event) =>{
        setCardForm(prevState =>{
            return ({...prevState,cvc: event.target.value})
    })}

    return (
    <div className="formContainer">
            <form>
                <p>CARDHOLDER NAME</p>
                    <input type={"text"} placeholder={"e.g. Jane Appleseed"} onChange={cardNameHandler}/>
                <p>CARD NUMBER</p>
                <input type={"text"} placeholder={"e.g. 1234 5678 9123 0000"} onChange={cardNumberHandler}/>
                <p>EXP. DATE (MM/YY)</p>
                <input type={"text"} placeholder={'MM'} onChange={cardexpMMHandler}/>
                <input type={"text"} placeholder={'YY'} onChange={cardexpYYHandler}/>
                <p>CVC</p>
                <input type={"text"} placeholder={'e.g. 123'} onChange={cardCvcHandler}/>
                <button>Confirm</button>
            </form>
        </div>
    )
} 

export default CardForm