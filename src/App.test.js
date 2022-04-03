import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("button has correct initial color", () => {
  render(<App />);

  // get button element with text "Change to blue"
  const colorButton = screen.getByRole("button", { name: "Change to blue" });

  // expect button to have color red
  expect(colorButton).toHaveStyle({ backgroundColor: "red" });

  // click button
  fireEvent.click(colorButton);

  // button should now have color red
  expect(colorButton).toHaveStyle({ backgroundColor: "blue" });

  // button should have text "Change to red" after clicked
  expect(colorButton).toHaveTextContent("Change to red");
});

test("initial conditions", () => {
  render(<App />);

  // cbutton starts enabled
  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  expect(colorButton).toBeEnabled();

  // checkbox is unchecked
  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).not.toBeChecked();
});

test("checkbox disables button on first click and enables button on second click", () => {
  render(<App />);

  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });
  const colorButton = screen.getByRole("button", { name: "Change to blue" });

  // click on checkbox to be checked
  fireEvent.click(checkbox);

  // button should be disabled
  expect(colorButton).toBeDisabled();

  // click on checkbox to be unchecked
  fireEvent.click(checkbox);

  // button should be enabled
  expect(colorButton).toBeEnabled();
});
