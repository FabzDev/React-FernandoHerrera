import GifItem from "./GifItem";
import { useFetchGifs } from "./hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
  
  const { gifs, isLoading } = useFetchGifs(category);
  
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
