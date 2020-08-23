/** funciones */

function saludar(nombre){
    return `Hola, ${nombre}`;
}
// saludar = 30;
console.log(saludar);
// console.log(saludar('sandra'));

const saludar2 = function(nom){
    return `Hola ${nom}`;
}

// saludar2 = 30; 
console.log(saludar2);

/** se recomienda usar las funciones con constantes para evitar sobreescribirlas */

const saludar3 = nombre => `Hola ${nombre}`;
console.log(saludar3('marcela'));

// const getUser = () => {
//     return {
//         uid:'ABC123',
//         username:'sandra.llanos123'
//     }
// } 
const getUser = () => ({
        uid:'ABC123',
        username:'sandra.llanos123'
    })


console.log(getUser());

const getUsuarioActivo =  nombre =>  ({
    uid: 'ABC456',
    username: nombre
});  

console.log(getUsuarioActivo('sandra.llanos456'));













