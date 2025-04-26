import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";


export const GifGrid = ({ category }) => {
  
  const { gifs, isLoading } = useFetchGifs(category);
  
  return (
    <>
      <h1>{category}</h1>
      {isLoading && <h4>Loading...</h4>}
      <div className="card-grid">
        {gifs.map((gif) => {
          return <GifItem key={gif.id} title={gif.title} url={gif.url} />;
        })}
      </div>
    </>
  );
};
