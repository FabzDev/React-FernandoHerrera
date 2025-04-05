const API_KEY = "bkUpWx7ebyORXlTH747bYSgrAmAw64BC";

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`);

//Long Syntax
// peticion.then( resp => {
//     resp.json().then( jsonData => {
//         const {data} = jsonData;
//         const img = document.createElement('img');
//         img.src = data.images.original.url;
//         document.body.appendChild(img);
//     })
// })

//Simple Sintax
peticion
.then((resp) => resp.json())
.then((dataJson) => {
    const {data} = dataJson;
    const img = document.createElement('img');
    img.src = data.images.original.url;
    document.body.appendChild(img);
})
.catch(console.warn);


