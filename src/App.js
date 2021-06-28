import React, {useState} from "react";
import Form from "./Form";
import Container from "./Container";
import Result from "./Result";
import { currencies }  from "./currencies";


function App() {

  const [result, setResult] = useState();

  const calculateResult = (currency, amount) => {
    const rate = currencies.find(({ shortcut }) => shortcut === currency).rate;

    setResult({
      sourceAmount: +amount,
      targetAmount: amount / rate,
      currency,
    });
  };


  return (
    <Container>
      <div className="container">
        <p className="container__mainHeader">Kalkulator walut</p>
        <Form 
        calculateResult={calculateResult}
        />
        <Result
        result={result}
        />
      </div>
    </Container>
  );
};

export default App;
