import { getHeroeById } from './bases/08-import-export'
/**Promesas
 * Hasta que se termina todo lo sincrono, se ejecutan los resultados
 * de las promesas
 */

// const promesa =  new Promise( (resolve, reject)=> {
//     setTimeout(() => {
//        console.log('2 segundos después');
//        resolve();
//     }, 2000);
// });

// promesa.then( ()=>{
//     console.log('then de la promesa');
// })

// const promesa =  new Promise( (resolve, reject)=> {
//     setTimeout(() => {
//        const heroe = getHeroeById(2);
//         //console.log(heroe);
//         resolve(heroe);
//         reject('no se pudo encontrar el héroe');
//     }, 2000);
// });

// promesa.then( (hero)=>{
//     console.log('este es el heroe de la promesa', hero );
// })
// promesa.catch(err => console.log( err ));

const getHeroeByIdAsync = (id) => {
    return new Promise( (resolve, reject)=> {
        setTimeout(() => {
            const heroe = getHeroeById(id);
            //console.log(heroe);
            if(heroe){
                resolve(heroe);
            }else{
                reject('No se pudo encontrar el héroe');
            } 
        }, 2000);
    });
}

getHeroeByIdAsync(1)
    // .then( (heroe)=>console.log( 'Héroe', heroe ))
    // .catch( err => console.warn( err ))
    .then( console.log ) // se puede enviar la referencia a una
    // función, en este caso console.log para que cuando se reciba
    // el then menade el primer argumento al clg
    .catch( console.warn )