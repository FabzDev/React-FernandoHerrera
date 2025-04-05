const getImage = async () => {
    try {
      const API_KEY = "bkUpWx7ebyORXlTH747bYSgrAmAw64BC";
      const resp = await fetch(
        `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
      );
      const { data } = await resp.json();
      const img = document.createElement("img");
      img.src = data.images.original.url;
      document.body.appendChild(img);
    } catch (err) {
      console.error("Manejor de error", err);
    }
  };
  
  getImage();
  