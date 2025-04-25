import { useEffect, useState } from "react";
import { fetchGifs } from "./helpers/FetchGifs";

export const GifGrid = ({ category }) => {
  const [gifs, setGifs] = useState([]);

  const getGifs = async () => {
    const myGifs = await fetchGifs(category);
    console.log(myGifs);

    setGifs(myGifs);
  };

  useEffect(() => {
    getGifs();
  }, []);

  return (
    <>
      <h1>{category}</h1>
      {gifs.map((gif) => {
        return (
          <div>
            <p>{gif.title}</p>
            <img src={gif.url} key={gif.id} />
          </div>
        );
      })}
    </>
  );
};
