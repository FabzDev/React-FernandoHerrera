import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

// bkUpWx7ebyORXlTH747bYSgrAmAw64BC
export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Attack On Titan","Ichigo 100%"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories((categories) => [newCategory, ...categories]);
  };

  return (
    <>
      <h1>Gif Expert App</h1>
      <AddCategory onNewCategory={(event) => onAddCategory(event)} />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}

    </>
  );
};
