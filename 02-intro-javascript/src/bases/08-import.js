import heroes from "../data/heroes.js";


const predicate = function({id}, idH){
    return id === idH;
}

export const getHeroeById = function (id){
    return heroes.find((heroe) => predicate(heroe, id));
}

// const getHeroeById = function (id){
//     return heroes.find((heroe) => heroe.id === id);
// }

// console.log(getHeroeById(1));



export const getHeroByOwner = function(owner){
    return heroes.filter( (hero) => hero.owner === owner)
}

// console.log(getHeroByOwner('Marvel'));

