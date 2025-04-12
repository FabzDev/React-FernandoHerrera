// const plusOne = () => {
//     valor++
// };

import { useState } from "react";

export const CounterApp = ({initValue}) => {

    let [counter, setCounter] = useState(initValue);

    
  return (
    <>
      <span>Counter App</span>
      <h2>{counter}</h2>
      <button onClick={() => setCounter(counter + 1)}>+1</button>
      <button onClick={() => setCounter(counter - 1)}>-1</button>
      <button onClick={() => setCounter(initValue)}>Reset</button>
    </>
  );
};
