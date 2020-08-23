/**Desestructuracion de arreglos */

const personajes = ['Goku', 'Vegeta','Trunks'];

// console.log(personajes[0]);
// console.log(personajes[1]);
// console.log(personajes[2]);

/** mediante comas le puedo indicar a js que posicion necesito*/
const [ , , p3 ] = personajes;
console.log( p3 );

const retornaArreglo = () => {
    return ['ABC', 123];
}

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);

const useState = (valor) => {
    return [ valor, ()=>{console.log('Hola mundo')}];
}
const [ nombre, setNombre ] = useState('Goku');
console.log( nombre );
setNombre();