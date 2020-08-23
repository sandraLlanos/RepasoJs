/**Objetos literales
 * trabajan con pares de valores
 */

const persona = {
    nombre: 'Sandra',
    apellido: 'llanos',
    edad: 45,
    direccion:{
        cidad:'New York',
        zip:55112445,
        lat:14.323325,
        lng:34.015542
    }
};

console.log({ persona });
console.table({ persona });
console.log(persona);
console.log(persona.nombre);

const persona2 = persona;
// en este caso no se esta haciendo una copia de la variable
// se está haciendo una copia de la referencia de memoria de la variable

console.log({persona2});

persona2.nombre = 'Brayhan';
console.log(persona);

const persona3 = {...persona};
persona3.apellido = 'Zambrano';
console.log({persona3});
console.log({persona});