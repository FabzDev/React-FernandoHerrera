import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

// bkUpWx7ebyORXlTH747bYSgrAmAw64BC
export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['Attack On Titan', 'Ichigo 100%'])
  const addAnime = (anime) => setCategories([anime, ...categories]);


  return (
    <>
      <h1>Gif Expert App</h1>
      
      <AddCategory />
      <button onClick={() => addAnime('Naruto')}>Add Category</button>
      
      <ul>
        {categories.map(category => <li key={category}>{category}</li>)}
      </ul>    
    </>
  );
};
