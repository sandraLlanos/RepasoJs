/**Desestructuracion
 * o Asignación desestructurante
 * La sintaxis de asignación desestructurante (destructuring assignment) es una expresión que posibilita la extracción de datos de arrays,
 * o de propiedades de objetos, en variables distintas.
 */

const persona = {
    nombre:'Tony',
    edad: 45,
    clave: 'Iroman'
}
console.log(persona);
console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.clave);

/**ña desestructuración me permite extraer
 * del objeto lo que intereza
 */
const { nombre, edad, clave } = persona;
console.log(nombre);
console.log( edad );
console.log( clave );

/** Por medio de el uso de la constante puedo extraer los 
 * valores que requiero de la persona.
*/
// const returnaPersona = usuario => {
//     const {nombre, edad, clave } = usuario;
//     console.log(nombre, clave, edad);
// }

/** Es este caso podemos extraer directamente las propiedades
 * que me interezan directamente en el arguneto .. agregando {}
*/
// const returnaPersona = ({nombre, edad, clave}) => {
//     console.log(nombre, clave, edad);
// }

/** Tambien podemos asignar valores por defecto
 * entonces si no existe la propiedad asigna por defecto la que defina
 * de lo contrario toma la propiedad del objeto
 */
// const returnaPersona = ({nombre, edad, clave, rango = 'Capitan'}) => {
//     console.log(nombre, clave, edad, rango);
// }
// returnaPersona(persona);

const useContext = ({ edad, clave }) => {

    return {
        nombreClave: clave,
        anios: edad,
        latlng:{
            lat: 142.124,
            lng: -12455.32
        }
    }
}

const {nombreClave, anios, latlng:{lat, lng} }  = useContext(persona);
console.log( anios, nombreClave );
console.log( lat, lng );


