// Test: debe hacer match con el snapshoot

import { screen } from "@testing-library/dom";
import { CounterApp } from "../src/CounterApp";
import { render } from "@testing-library/react";

// Test: debe mostrar el valor inicial de 100 <CounterApp value={100}/>
describe("Tests on <CounterApp/> Component", () => {
  const initValueExp = 100;

  test("should match with the snapshot", () => {
    render(<CounterApp initValue={initValueExp} />);
    expect(screen).toMatchSnapshot();
  });

  test("should render initial value", () => {
    render(<CounterApp initValue={initValueExp} />);
    expect(screen.getByRole('heading',{level:2}).innerHTML)
    .toBe(initValueExp.toString())
    // expect(screen.getByText(initValueExp)).toBeTruthy();
});

});
