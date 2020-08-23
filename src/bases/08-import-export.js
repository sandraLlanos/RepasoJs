import { heroes } from '../data/heroes';

// console.log(heroes)

// const getHeroeById = (id) => {
//     return heroes.find((Heroe) => { 
//         if(Heroe.id === id){
//             return true;
//         } else {
//             return false;
//         }
//     });
// }
const getHeroeById = (id) => heroes.find((heroe) => heroe.id === id);
// console.log(getHeroeById(2));

const getHeroesByOwner = (owner) => heroes.filter((heroe) => heroe.owner === owner);
// console.log(getHeroesByOwner('DC'));

export {
    getHeroeById,
    getHeroesByOwner
}