
const usuarioFabio = {
    name: 'Fabio',
    cc: 1140,
    priority: 'Standard'
}


// const { name:nombre, priority:prioridad } = usuario
const { name, priority } = usuarioFabio


// const getUserName = (user) => {
//     return user.name;
// }

const getUserName = ({ name }) => {
    return name;
}

const useContext = ({ name, cc, priority, bonus ='Popcorn'})=>{
 return {
    nombre:name,
    cedula:cc,
    prioridad:priority,
    bono:bonus,
    pelisFav: {
        uno: "AOT",
        dos: "GOT"
    }
 }   
}


console.log(usuarioFabio);
console.log(name);
console.log(priority);
console.log('----------');
console.log(getUserName(usuarioFabio));

const {nombre, prioridad, pelisFav:{uno:test, dos}} = useContext(usuarioFabio);

console.log(nombre, prioridad,test,dos);

