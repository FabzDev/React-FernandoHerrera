import { useEffect, useState } from "react";
import { fetchGifs } from "./helpers/FetchGifs";
import GifItem from "./GifItem";

export const GifGrid = ({ category }) => {
  const [gifs, setGifs] = useState([]);

  const getGifs = async () => {
    const myGifs = await fetchGifs(category);
    // console.log(myGifs);

    setGifs(myGifs);
  };

  useEffect(() => {
    getGifs();
  }, []);

  return (
    <>
      <h1>{category}</h1>
      <div className="card-grid">
        {gifs.map((gif) => {
          return <GifItem key={gif.id} title={gif.title} url={gif.url} />;
        })}
      </div>
    </>
  );
};
