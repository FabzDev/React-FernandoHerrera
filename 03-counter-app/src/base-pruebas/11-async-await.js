



export const getImagen = async () => {
  try {
    const apiKey = "bkUpWx7ebyORXlTH747bYSgrAmAw64BC";
    const resp = await fetch(
      `http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    );
    const { data } = await resp.json();
    const { url } = data.images.original;
    // const img = document.createElement("img");
    // console.log("url: ", url);
    
    return url;
    // img.src = url;
    // document.body.append(img);
  } catch (error) {
    // manejo del error
    console.error("error: ",error);
  }
};
