import { useState } from "react";

export const AddCategory = () => {
  const [inputValue, setInputValue] = useState("Attack on Titan");

  const handleTextImput = ({ target }) => {
    setInputValue(target.value);
    // console.log(inputValue);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    // console.log(inputValue);
    
  }

  return (
    <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Buscar Gif"
          value={inputValue}
          onChange={handleTextImput}
        />
    </form>
  );
};
