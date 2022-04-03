import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

export function replaceCamelWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, " $1")
}

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
      <button
        style={{ backgroundColor: disabled ? "gray" : buttonColor }}
        disabled={disabled}
        onClick={colorButtonHandler}>
        Change to {newButtonColor}
      </button>
      <input
        type="checkbox"
        id="disable-button-checkbox"
        defaultChecked={disableHandler}
        aria-checked={disabled}
        onChange={(event) => disableHandler(event)}
      />
      <label htmlFor="disable-button-checkbox">Disable button</label>
    </div>
  );
}

export default App;
