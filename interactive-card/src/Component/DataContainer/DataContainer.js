import React, {useState} from "react";
import CardForm from "../CardForm/CardForm";
import './DataContainer.css'

const DataContainer = (props) =>{
    
    const [cardNumber, setcardNumber] = useState("0000000000000000")
    const addFormDataHandler = data =>{
        setcardNumber(data)
    }
    props.onAddData(cardNumber)
    return(
        <div className="dataContainer">
            <CardForm onAddData={addFormDataHandler} />
        </div>
    )
} 

export default DataContainer