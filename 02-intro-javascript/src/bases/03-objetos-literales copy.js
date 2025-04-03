

const persona = {
    nombre: "Eren",
    apellido: "Jaegar",
    edad: 20
}


// console.log( persona );
// console.table( {persona} );

const persona2 = { ...persona };

persona2.nombre = "Fabio";

console.log( persona );
console.log( persona2 );
















