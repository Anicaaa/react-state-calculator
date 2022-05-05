import { useState } from "react";
import "./App.css";

function App() {
  const [leftNum, setLeftNum] = useState("");
  const [rightNum, setRightNum] = useState("");
  const [totNum, setTotNum] = useState("");
  const [symbol, setSymbol] = useState("+");

  const onClickAdd = () => {
    setTotNum(Number(leftNum) + Number(rightNum));
  };
  // We need a state containing a number, symbol, another number.
  // Function that add/substract/multiply/divide the first number with the second number
  // Returns the result in the display panel answer

  return (
    <div className="calculator">
      <div className="panel">
        <p>{leftNum}</p>
        <div className="numbers">
          <button onClick={() => setLeftNum(leftNum + "1")}>1</button>
          <button onClick={() => setLeftNum(leftNum + "2")}>2</button>
          <button onClick={() => setLeftNum(leftNum + "3")}>3</button>
          <button onClick={() => setLeftNum(leftNum + "4")}>4</button>
          <button onClick={() => setLeftNum(leftNum + "5")}>5</button>
          <button onClick={() => setLeftNum(leftNum + "6")}>6</button>
          <button onClick={() => setLeftNum(leftNum + "7")}>7</button>
          <button onClick={() => setLeftNum(leftNum + "8")}>8</button>
          <button onClick={() => setLeftNum(leftNum + "9")}>9</button>
          <button onClick={() => setLeftNum(leftNum + "0")}>0</button>
          <button onClick={() => setLeftNum("")}>Clear</button>
        </div>
      </div>

      <div className="panel">
        <p>{symbol}</p>
        <div className="numbers">
          <button onClick={""}>+</button>
          <button>-</button>
          <button>*</button>
          <button>÷</button>
        </div>
      </div>

      <div className="panel">
        <p>{rightNum}</p>
        <div className="numbers">
          <button onClick={() => setRightNum(rightNum + "1")}>1</button>
          <button onClick={() => setRightNum(rightNum + "2")}>2</button>
          <button onClick={() => setRightNum(rightNum + "3")}>3</button>
          <button onClick={() => setRightNum(rightNum + "4")}>4</button>
          <button onClick={() => setRightNum(rightNum + "5")}>5</button>
          <button onClick={() => setRightNum(rightNum + "6")}>6</button>
          <button onClick={() => setRightNum(rightNum + "7")}>7</button>
          <button onClick={() => setRightNum(rightNum + "8")}>8</button>
          <button onClick={() => setRightNum(rightNum + "9")}>9</button>
          <button onClick={() => setRightNum(rightNum + "0")}>0</button>
          <button onClick={() => setRightNum("")}>Clear</button>
        </div>
      </div>
      <div className="panel answer">
        <p>{totNum}</p>
        <div>
          <button onClick={onClickAdd}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
