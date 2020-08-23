/** Async await */

// const getImagenPromesa = () => {
//     const promesa = new Promise( (resolve, reject) => {
//        resolve('https://fjlskdjgl.com') 
//     })
//     return promesa;
// }

/**vamos a simplificarlo */
// const getImagenPromesa = () => new Promise(resolve => resolve('https://fjlskdjgl.com'))
// getImagenPromesa().then( console.log );

/** Igualmente es largo y dificil de leer
 * vamos a crear el mismo ejercicio con Async await
 */

// const getImage = async() => {
//     return 'https://fjlskdjgl.com';
// }
// getImage().then(console.log)
// console.log( getImage() );

/**Si recreamos el ejercicio realizado con fetch tendriamos */

const getImage = async() =>{
    try {
        const apiKey = 'XRnsOEVygIHs5bH4hMpOall24oypnnmH';
        const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
        // el await indica que debe esperar que termine la promesa antes de continuar con la siguiente linea de codigo
        // una vez termine se podria pensar que el codigo es sincrono.
        const { data } = await resp.json();
        const {url} = data.images.original;
        console.log(url)
        const img =  document.createElement('img');
        img.src = url;
        document.body.append( img );
    }catch (error){
        console.error(error);
    }
}

getImage();
