const nombre = 'Sandra';
const apellido =  'llanos';

const nombreCompleto = nombre + ' ' + apellido;
const nombreCompletoTemplateString = `${nombre} ${apellido}`;

console.log(nombreCompleto);
console.log(nombreCompletoTemplateString);

function getSaludo(nombre){
    return `hola ${nombre}`;
}

console.log(getSaludo(nombre));
console.log(` Este es un saludo desde una función
            ${getSaludo(nombre)}`);
