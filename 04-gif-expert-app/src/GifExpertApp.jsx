import { useState } from "react";

// bkUpWx7ebyORXlTH747bYSgrAmAw64BC
export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['Attack On Titan', 'Ichigo 100%'])
  // console.log(categories);
  
  return (
    <>
      <h1>Gif Expert App</h1>
      <ul>
        {categories.map(category => <li key={category}>{category}</li>)}
      </ul>    
    </>
  );
};
