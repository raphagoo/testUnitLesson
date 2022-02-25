import React from "react";
import { render, screen } from "@testing-library/react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import App from "../App";
import Result from "../components/Result";

let container: any;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

test("renders have calculatrice", () => {
  const { container } = render(<App />);
  const title = screen.getByText(/calculatrice/i);
  expect(title).toBeInTheDocument();
  expect(container.getElementsByClassName("touch").length).toBe(17);
});

test("test addition fonctional", () => {
  act(() => {
    ReactDOM.render(<App />, container);
  });
  const button1 = container.querySelector(".touch[data-value='1']");
  const button2 = container.querySelector(".touch[data-value='2']");
  const buttonPlus = container.querySelector(".touch[data-value='+']");
  const buttonEqual = container.querySelector(".touch[data-value='=']");
  const label = container.querySelector(".result");
  act(() => {
    button1.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });
  act(() => {
    button2.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });
  act(() => {
    buttonPlus.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });
  act(() => {
    button1.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });
  act(() => {
    button2.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });
  act(() => {
    buttonEqual.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });

  expect(label.textContent).toBe(Number(12 + 12).toString());
});

test("test substraction fonctional", () => {
  act(() => {
    ReactDOM.render(<App />, container);
  });
  const button1 = container.querySelector(".touch[data-value='1']");
  const button2 = container.querySelector(".touch[data-value='2']");
  const buttonMinus = container.querySelector(".touch[data-value='-']");
  const buttonEqual = container.querySelector(".touch[data-value='=']");
  const label = container.querySelector(".result");
  act(() => {
    button1.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });
  act(() => {
    button2.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });
  act(() => {
    buttonMinus.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });
  act(() => {
    button1.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });
  act(() => {
    buttonEqual.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });

  expect(label.textContent).toBe(Number(12 - 1).toString());
});

test("test square fonctional", () => {
  act(() => {
    ReactDOM.render(<App />, container);
  });
  const button1 = container.querySelector(".touch[data-value='1']");
  const button2 = container.querySelector(".touch[data-value='2']");
  const buttonSquare = container.querySelector(".touch[data-value='√x']");
  const buttonEqual = container.querySelector(".touch[data-value='=']");
  const label = container.querySelector(".result");
  act(() => {
    button1.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });
  act(() => {
    button2.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });
  act(() => {
    buttonSquare.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });
  act(() => {
    buttonEqual.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });

  expect(label.textContent).toBe(Number(Math.sqrt(12)).toString());
});

test("test modulo fonctional", () => {
  act(() => {
    ReactDOM.render(<App />, container);
  });
  const button1 = container.querySelector(".touch[data-value='7']");
  const button2 = container.querySelector(".touch[data-value='2']");
  const buttonModulo = container.querySelector(".touch[data-value='%']");
  const buttonEqual = container.querySelector(".touch[data-value='=']");
  const label = container.querySelector(".result");
  act(() => {
    button1.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });
  act(() => {
    buttonModulo.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });
  act(() => {
    button2.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });
  act(() => {
    buttonEqual.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });

  expect(label.textContent).toBe(Number(7 % 2).toString());
});

test("renders result", () => {
  const { container } = render(<Result value="123" />);
  expect(container.getElementsByClassName("result")[0].textContent).toBe("123");
});
