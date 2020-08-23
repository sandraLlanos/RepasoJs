/** Operador condiciional ternario */

const activo = true;
// let mensaje = '';

// if (activo) {
//     mensaje = 'Activo';
// }else{
//     mensaje = 'Inactivo';
// }

// const mensaje = ( activo ) ? 'Activo' : 'Inactivo';
// const mensaje = ( activo === true ) ? 'Activo' : 'Inactivo';
// const mensaje = ( !activo ) ? 'Activo' : 'Inactivo';
// const mensaje = ( !activo ) ? 'Activo' : null;

/** si no deseo ejecutar el else del ternario puedo:  */
const mensaje = !activo && 'Activo';


console.log(mensaje);