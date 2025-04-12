import { fireEvent, getByRole, screen } from "@testing-library/dom";
import { CounterApp } from "../src/CounterApp";
import { render } from "@testing-library/react";

describe("Tests on <CounterApp/> Component", () => {
  const initValueExp = 100;

  test("should match with the snapshot", () => {
    render(<CounterApp initValue={initValueExp} />);
    expect(screen).toMatchSnapshot();
  });

  test("should render initial value", () => {
    render(<CounterApp initValue={initValueExp} />);
    expect(screen.getByRole("heading", { level: 2 }).innerHTML).toBe(
      initValueExp.toString()
    );
    // expect(screen.getByText(initValueExp)).toBeTruthy();
  });

  //Learning: fireEvent.click(_element_)
  test("should increment 'counter' after clicking button +1", () => {
    render(<CounterApp initValue={initValueExp} />);
    fireEvent.click( screen.getByRole('button', {name:'+1'}));
    expect(screen.getByText(initValueExp+1).innerHTML).toBe((initValueExp+1)+"");
  });

  test("should decrease 'counter' after clicking button -1", () => {
    render(<CounterApp initValue={initValueExp} />);
    fireEvent.click( screen.getByRole('button', {name:'-1'}) );
    expect(screen.getByText(initValueExp-1)).toBeTruthy();
  });

  test("should reset 'counter' after clicking reset button", () => {
    render(<CounterApp initValue={initValueExp} />);
    fireEvent.click( screen.getByRole('button', {name:'+1'}));
    fireEvent.click( screen.getByRole('button', {name:'+1'}));
    fireEvent.click( screen.getByRole('button', {name:'+1'}));
    fireEvent.click( screen.getByRole('button', {name:'-1'}) );
    fireEvent.click( screen.getByRole('button', {name:'Reset'}) );
    expect(screen.getByText(initValueExp)).toBeTruthy();
  });
});
