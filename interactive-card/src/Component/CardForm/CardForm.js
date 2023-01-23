import React, { useState } from "react";
import "./CardForm.css";

const CardForm = (props) => {


  //0=BeginingState, 1=No Value Entered, 2=Incorrect Value entered, 3=Valid input
 
  const [formInputValid, setFormInputValid] = useState(0)
  const [cardForm, setCardForm] = useState({});
  props.onAddData(cardForm);

  // These are the event handlers to grab the users input as they are typing  we can lift the state
  const cardNameHandler = (event) => {
    setCardForm((prevState) => {
      return { ...prevState, name: event.target.value };
    });
  };
  const cardNumberHandler = (event) => {
    setCardForm((prevState) => {
      return { ...prevState, card: event.target.value };
    });
  };
  const cardexpMMHandler = (event) => {
    setCardForm((prevState) => {
      return { ...prevState, expMM: event.target.value };
    });
  };
  const cardexpYYHandler = (event) => {
    setCardForm((prevState) => {
      return { ...prevState, expYY: event.target.value };
    });
  };
  const cardCvcHandler = (event) => {
    setCardForm((prevState) => {
      return { ...prevState, cvc: event.target.value };
    });
  };

  //Form Submission handler to help with validation
  const formSubmissionHandler = (event) =>{
    event.preventDefault()
  }

  return (
    <form 
    className="formContainer"
    onSubmit={formSubmissionHandler}>
      <div className="cardHolderName">
        <p>CARDHOLDER NAME</p>
        <input
        className="input_field"
          type={"text"}
          placeholder={"e.g. Jane Appleseed"}
          onChange={cardNameHandler}
          required={true}
        />
      </div>
      <div className="cardNum">
        <p>CARD NUMBER</p>
        <input
        className="input_field"
          maxLength="19"
          minLength="8"
          type="tel" 
          inputmode="numeric" 
          pattern="[0-9\s]{13,19}"
          placeholder="e.g. 1234 5678 9123 0000"
          onChange={cardNumberHandler}
          required={true}
        />
      </div>
      <div className="expDate">
        <p>EXP. DATE (MM/YY)</p>
        <input
          className="month input_field"
          type={"text"}
          placeholder={"MM"}
          onChange={cardexpMMHandler}
          required={true}
        />
        <input
          className="year input_field"
          type={"text"}
          placeholder={"YY"}
          onChange={cardexpYYHandler}
          required={true}
          
        />
      </div>
      <div className="cvcNum" >
        <p>CVC</p>
        <input
        
          className="input_field"
          type={"text"}
          placeholder={"e.g. 123"}
          onChange={cardCvcHandler}
          required={true}
        />
      </div>
      <div className="confirmButton">
        <input 
        className="submit_button" 
        type={"submit"}
        value={"Confirm"}></input>
      </div>
    </form>
  );
};

export default CardForm;
