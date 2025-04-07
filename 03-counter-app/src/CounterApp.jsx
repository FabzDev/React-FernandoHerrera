// const plusOne = () => {
//     valor++
// };

import { useState } from "react";

export const CounterApp = ({value}) => {

    let [counter, setCounter] = useState(value);

    
  return (
    <>
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <button onClick={() => setCounter(counter + 1)}>+1</button>
      <button onClick={() => setCounter(counter - 1)}>-1</button>
      <button onClick={() => setCounter(value)}>Reset</button>
    </>
  );
};
