// const plusOne = () => {
//     valor++
// };

import { useState } from "react";

export const CounterApp = ({value}) => {

    const [counter, setCounter] = useState(value);

    

  return (
    <>
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <button onClick={() => setCounter(counter + 1)}>click</button>
    </>
  );
};
