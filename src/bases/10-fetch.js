const apiKey = 'XRnsOEVygIHs5bH4hMpOall24oypnnmH';

const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)

// peticion.then( (respuesta)=>{
//     console.log(respuesta);
//     respuesta.json()
//         .then( data => {
//             console.log(data);
//         })
// })
// .catch( console.warn );

/** es el mismo ejercicio pero con las promesas en cadena */
peticion.then( (respuesta)=> respuesta.json() )
        .then( ({data}) => {
            const {url} = data.images.original;
            const img = document.createElement('img');
            img.src = url;
            document.body.append( img );
            console.log(data.images.original.url)
        })
        .catch( console.warn );