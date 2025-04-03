



const useState = ( nombre ) => {
    return [ nombre, ()=> console.log(`El nombre es ${nombre}`)]
}

const [nombre, showNombre] = useState('Fabio');

// console.log(useState('Fabio'));

console.log(nombre);
showNombre();



