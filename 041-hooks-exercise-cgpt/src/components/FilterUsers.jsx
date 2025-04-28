import { useEffect, useRef } from "react";
import { useState } from "react";
import { users } from "../assets/usersDB";

export const FilterUsers = (props) => {
  console.log("Component Renderized...");

  const [isLoading, setIsLoading] = useState(false);
  const [nameList, setNameList] = useState([]);
  const debounceTimer = useRef(null);

  const handleInputChange = (e) => {
    setIsLoading(true);
    clearTimeout(debounceTimer.current);
    debounceTimer.current = setTimeout(() => {
      const newInputValue = e.target.value;
      const regex = newInputValue != "" && new RegExp(`^${newInputValue}`);
      const namesFound = users.filter((user) => user.name.match(regex));
      setNameList(namesFound);
      setIsLoading(false);
    }, 3000);
  };

  useEffect(() => {}, []);

  return (
    <>
      <h1>Usuarios</h1>
      <input
        type="text"
        onChange={(e) => {
          handleInputChange(e);
        }}
      />
      <ul>
        {isLoading && <h3>Loading...</h3>}
        {nameList.map((u) => (
          <li key={u.id}>{u.name}</li>
        ))}
      </ul>
    </>
  );
};
