import { useEffect, useState } from "react";
import { fetchGifs } from "../helpers/FetchGifs";


export const useFetchGifs = (category) => {
    const [gifs, setGifs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
      const getGifs = async () => {
        const myGifs = await fetchGifs(category);
        setGifs(myGifs);
        setIsLoading(false);        
      };
    
      useEffect(() => {
        getGifs();
    }, []);
    

    return {
        gifs,
        isLoading
    }
}