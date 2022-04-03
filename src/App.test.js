import { toBeChecked } from "@testing-library/jest-dom/dist/matchers";
import { render, screen, fireEvent } from "@testing-library/react";
import App, { replaceCamelWithSpaces } from "./App";

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

  // button starts enabled
  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  expect(colorButton).toBeEnabled();

  // checkbox starts unchecked
  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });
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

test("button should be gray when disabled and red when enabled", () => {
  render(<App />);

  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });

  // disable button on checkbox click
  fireEvent.click(checkbox);

  // expect button to be grey
  expect(colorButton).toHaveStyle({ backgroundColor: "gray" });

  // enable button on checkbox click
  fireEvent.click(checkbox);

  // expect button to be red
  expect(colorButton).toHaveStyle({ backgroundColor: "red" });
});

test("button should be gray when disabled and blue when enabled", () => {
  render(<App />);

  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });

  // change button color with click
  fireEvent.click(colorButton);

  // expect button to be blue
  expect(colorButton).toHaveStyle({ backgroundColor: "blue" });

  // disable button on checkbox click
  fireEvent.click(checkbox);

  // expect button to be gray
  expect(colorButton).toHaveStyle({ backgroundColor: "gray" });

  // enable button on checkbox click
  fireEvent.click(checkbox);

  // expect button to be blue
  expect(colorButton).toHaveStyle({ backgroundColor: "blue" });
});

describe("spaces before camel-case capital letters", () => {
  test("Works for no innter capital letters", () => {
    expect(replaceCamelWithSpaces("Red")).toBe("Red");
  });

  test("Works for one inner capital letter", () => {
    expect(replaceCamelWithSpaces("MidnightBlue")).toBe("Midnight Blue");
  });

  test("Works for multiple inner capital letters", () => {
    expect(replaceCamelWithSpaces("UltraVioletBlue")).toBe("Ultra Violet Blue");
  });
});
