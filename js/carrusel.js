let imagenes = [
               {ruta: './Imagenes/img1.jpg', alt: 'Img hotel 5 estrellas'},
               {ruta: './Imagenes/img2.jpg', alt: 'Img hotel 4 estrellas'},
               {ruta: './Imagenes/img3.jpg', alt: 'Img hotel 5 estrellas'},
               {ruta: './Imagenes/img4.jpg', alt: 'Img hotel 4 estrellas'},
               {ruta: './Imagenes/img5.jpg', alt: 'Img hotel 3 estrellas'},
                ];


let indice = 0;
   

const img = document.getElementById("imagen");
const contador = document.getElementById("contador");
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
}
function propiedades(indiceNuevo){
img.src = imagenes[indiceNuevo].ruta;
img.alt = imagenes[indiceNuevo].alt;
contador.textContent = "Foto " + (indiceNuevo + 1) + " de " + imagenes.length;
}
propiedades(indice);
    


