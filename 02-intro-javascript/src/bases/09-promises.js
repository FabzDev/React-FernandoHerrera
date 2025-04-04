
import { getHeroeById } from "../data/heroes.js";

// const promesa = new Promise((resolve, reject)=> {
//     setTimeout(() => {
//         const hero = getHeroeById(2);
//         console.log(hero);
        
//     }, 2000 )
// });

const getHeroByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const hero = getHeroeById(id);
            hero?resolve(hero):reject('Tremendo error compita')
        }, 2000)}
    )
}

getHeroByIdAsync(4)
    .then(console.log)
    .catch(console.warn)







 




