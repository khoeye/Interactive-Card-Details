import { useState } from 'react';
import './App.css'
import CardContainer from './Component/CardContainer/CardContainer';
import DataContainer from './Component/DataContainer/DataContainer';


function App() {

  const [cardNumber, setCardNumber] = useState("0000000000000000")
  const cardNumberHandler = (data) =>{
    setCardNumber(data)
  }

  return (
    <div className="App">
      <CardContainer cardProp={cardNumber} />
      <DataContainer onAddData={cardNumberHandler}/>
    </div>
  );
}

export default App;
