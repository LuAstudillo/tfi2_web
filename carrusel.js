let imagenes = [
               {ruta: './imageness/img1.jpg', alt: 'Imagen 1'},
               {ruta: './imageness/img2.jpg', alt: 'Imagen 2'},
               {ruta: './imageness/img3.jpg', alt: 'Imagen 3'},
               {ruta: './imageness/img4.jpg', alt: 'Imagen 4'},
               {ruta: './imageness/img5.jpg', alt: 'Imagen 5'},
                ];

    console.log("arreglo de imagenes", imagenes);

let indice = 0;
   console.log("Valor de índice:", indice);

const img = document.getElementById("imagen");
   console.log("elemento img", img);

const botonSiguiente = document.getElementById("siguiente");

function siguiente() {
    if (indice == imagenes.length - 1) {
        indice = 0;
    } else {
        indice++;
    }
    propiedades(indice);
}

function anterior() {
    if (indice == 0) {
        indice = imagenes.length - 1;
    } else {
        indice--;
    }
    propiedades(indice);
    console.log("elemento img", img);
}
function propiedades(indiceNuevo){
img.src = imagenes[indiceNuevo].ruta;
img.alt = imagenes[indiceNuevo].alt;
 console.log("Valor de la imagen actual:", indiceNuevo);
    
}

