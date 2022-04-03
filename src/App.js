import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [buttonColor, setButtonColor] = useState("red");
  const [disabled, setDisabled] = useState(false);
  const newButtonColor = buttonColor === "red" ? "blue" : "red";

  const colorButtonHandler = () => {
    setButtonColor(newButtonColor);
  };

  const disableHandler = (event) => {
    setDisabled(event.target.checked);
  };

  return (
    <div className="App">
      <button style={{ backgroundColor: buttonColor }} disabled={disabled} onClick={colorButtonHandler}>
        Change to {newButtonColor}
      </button>
      <input
        type="checkbox"
        defaultChecked={disableHandler}
        aria-checked={disabled}
        onChange={(event) => disableHandler(event)}
      />
    </div>
  );
}

export default App;
