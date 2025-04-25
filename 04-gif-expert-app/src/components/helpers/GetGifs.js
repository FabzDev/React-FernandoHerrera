export const getGifs = async (search) => {
  const httpResp = await fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=ybboGP7QGwVdJvwi4E1x2Yc22tVgYqhS&q=${search}&limit=5`
  );
  const { data } = await httpResp.json();

  const gifs = data.map((data) => ({
    title: data.title,
    id: data.id,
    url: data.images.downsized_medium.url,
  }));

  return gifs;
};
