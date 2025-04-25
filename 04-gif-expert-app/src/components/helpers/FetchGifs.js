// https://api.giphy.com/v1/gifs/search?api_key=ybboGP7QGwVdJvwi4E1x2Yc22tVgYqhS&q=${search}&limit=5

export const fetchGifs = async (cat) => {
  const gifsHttpResp = await fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=ybboGP7QGwVdJvwi4E1x2Yc22tVgYqhS&q=${cat}&limit=5`
  );
  const { data } = await gifsHttpResp.json();
  console.log(data);
  
  const gifs = data.map((gifData) => ({
    id: gifData.id,
    title: gifData.title,
    url: gifData.images.downsized_medium.url
  }));

  return gifs;
};
