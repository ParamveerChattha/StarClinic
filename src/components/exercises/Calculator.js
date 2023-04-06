import { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [val1, setVal1] = useState(0);
  const [val2, setVal2] = useState(0);
  const [result, setResult] = useState(0);
  const [alert, setAlert] = useState(false);

  const opreations = ["+", "-", "/", "%", "*"];
  const changeValue = (e) => {
    if (!isNaN(parseInt(e.target.value))) {
      e.target.name === "value1"
        ? setVal1(e.target.value)
        : setVal2(e.target.value);
    } else setAlert(true);
  };

  const calculate = (operation) => {
    switch (operation) {
      case "+":
        setResult(parseInt(val1) + parseInt(val2));
        break;
      case "-":
        setResult(parseInt(val1) - parseInt(val2));
        break;
      case "/":
        setResult(parseInt(val1) / parseInt(val2));
        break;
      case "%":
        setResult(parseInt(val1) % parseInt(val2));
        break;
      case "*":
        setResult(parseInt(val1) * parseInt(val2));
        break;
    }
  };

  return (
    <>
      <div className="Base">
        <div className="UserInputs">
          <input
            placeholder="enter value 1"
            name="value1"
            onChange={(e) => changeValue(e)}
          ></input>
          <input name="value2" onChange={(e) => changeValue(e)}></input>
        </div>
        <div className="OperationalButton">
          {opreations.map((operation) => (
            <button
              key={operation}
              name={operation}
              onClick={(e) => calculate(e.target.name)}
            >
              {operation}
            </button>
          ))}
        </div>
        <div className="Result">
          <span>result : {result}</span>
        </div>
      </div>
      {alert && window.alert("not a value number")}
    </>
  );
};

export default Calculator;
