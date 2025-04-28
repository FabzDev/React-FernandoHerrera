import { useEffect } from "react";
import { useState } from "react";
import { users } from "../assets/usersDB";

export const FilterUsers = (props) => {
  console.log("Component Renderized...");

  const [nameList, setNameList] = useState([]);

  const handleInputChange = (e) => {
    setTimeout(() => {
      const newInputValue = e.target.value;
      const regex = newInputValue != "" && new RegExp(`^${newInputValue}`);
      const namesFound = users.filter((user) => user.name.match(regex));
      setNameList(namesFound);
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
        {nameList.map((u) => (
          <li key={u.id}>{u.name}</li>
        ))}
      </ul>
    </>
  );
};
