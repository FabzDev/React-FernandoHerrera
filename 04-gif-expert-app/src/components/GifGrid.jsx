import { useState } from "react";
import { getGifs } from "./helpers/GetGifs";
import { useEffect } from "react";

export const GifGrid = ({ category }) => {
  const [gifs, setGifs] = useState([]);

  const getGifsData = async () => {
    const gifsData = await getGifs(category);
    setGifs(gifsData);
  };

  useEffect(() => {
    getGifsData();
  }, []);

  return (
    <>
      <h1>{category}</h1>

      {gifs.map((gif) => {
        return <img key={gif.id} src={gif.url}></img>;
      })}
    </>
  );
};
