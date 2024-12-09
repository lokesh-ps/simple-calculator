import React, { useState } from "react";
import "./App.css";

function App() {
  const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  const expressions = ["+", "-", "*", "/", "%"];

  const [userInput, setUserInput] = useState("");
  const [result, setResult] = useState(null);
  const [isSubmitBtnClicked, setIsSubmitBtnClicked] = useState(false);
  const handleClick = (input: string) => {
    setUserInput((prev) => prev + input);
  };
  const handleSubmitClick = () => {
    const res = eval(userInput);
    setResult(res);
    setIsSubmitBtnClicked(true);
  };
  const handleResetClick = () => {
    setResult(null);
    setIsSubmitBtnClicked(false);
    setUserInput("");
  };
  return (
    <div className="App">
      <h1>Simple Calculator</h1>
      <div className="user-input-and-calc">
        {isSubmitBtnClicked ? result : userInput}
      </div>
      <div className="number-holder">
        {numbers?.map((item, index) => {
          return (
            <button
              key={item}
              onClick={() => handleClick(item)}
              style={{ margin: "2px" }}
            >
              {item}
            </button>
          );
        })}
      </div>
      <div className="expression-holder">
        {expressions?.map((item, index) => {
          return (
            <button
              key={item}
              onClick={() => handleClick(item)}
              style={{ margin: "2px" }}
            >
              {item}
            </button>
          );
        })}
      </div>
      <div className="button-container">
        <button onClick={handleSubmitClick}>Submit</button>
        <button onClick={handleResetClick}>Reset</button>
      </div>
    </div>
  );
}

export default App;
