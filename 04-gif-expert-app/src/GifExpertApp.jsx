import { useState } from "react";

// bkUpWx7ebyORXlTH747bYSgrAmAw64BC
export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['Attack On Titan', 'Ichigo 100%'])
  const addAnime = (anime) => () => setCategories([...categories, anime]);


  return (
    <>
      <h1>Gif Expert App</h1>
      {/* <button onClick={() => setCategories([...categories, "Naruto"])}>Add Category</button> */}
      <button onClick={addAnime('Naruto')}>Add Category</button>
      
      <ul>
        {categories.map(category => <li key={category}>{category}</li>)}
      </ul>    
    </>
  );
};
