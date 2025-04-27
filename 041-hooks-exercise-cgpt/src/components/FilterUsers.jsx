import { useEffect } from "react";
import { useState } from "react";
import { users } from "../assets/usersDB";

export const FilterUsers = (props) => {
  const [inputValue, setInputValue] = useState("");
  const [nameList, setNameList] = useState([]);

  const handleInputChange = (e) => {
    setTimeout(() => {
      setInputValue(e.target.value);
      console.log("handleImputChange");
    }, 2000);
  };

  const getNamesFound = () => {
    const regex = inputValue != "" && new RegExp(`^${inputValue}`);
    const namesFound = users.filter((user) => user.name.match(regex));
    setNameList(namesFound);
    console.log("getNamesFound");
  };

  const renderNamesFound = () => {
    console.log("renderNamesFound");
    return (
      <>
        <ul>
          {nameList.map((u) => (
            <li key={u.id}>{u.name}</li>
          ))}
        </ul>
      </>
    );
  };

  useEffect(() => {
    getNamesFound()
  }, [inputValue]);

  return (
    <>
      <h1>Usuarios</h1>
      <input type="text" onChange={handleInputChange} />
      {renderNamesFound()}
    </>
  );
};
