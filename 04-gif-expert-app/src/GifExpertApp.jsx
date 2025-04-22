import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

// bkUpWx7ebyORXlTH747bYSgrAmAw64BC
export const GifExpertApp = () => {
  
  const [animes, setAnimes] = useState(['Attack On Titan', 'Ichigo 100%'])
  
  const onAddCategory = (anime) => {
    setAnimes(animes => [anime, ...animes])
    // setAnimes([anime, ...animes]);
  }


  return (
    <>
      <h1>Gif Expert App</h1>
      
      <AddCategory 
      // setAnime={setAnimes}
      onNewCategory={event => onAddCategory(event)}
      />

      {/* <button onClick={() => addAnime(animes[0])}>Add Category</button> */}
      
      <ul>
        {animes.map(category => <li key={category}>{category}</li>)}
      </ul>    
    </>
  );
};
