import { useState } from "react";

export const AddCategory = ({onNewCategory}) => {
  
  const [inputValue, setInputValue] = useState("");
  
  const handleTextImput = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim() < 1) return;
    onNewCategory(inputValue.trim())
    setInputValue("");
  }

  return (
    <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Buscar Gif"
          value={inputValue}
          onChange={ handleTextImput }
        />
    </form>
  );
};
