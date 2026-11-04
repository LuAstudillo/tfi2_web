let imagenes = [
               {ruta: './Imagenes/img1.jpg', alt: 'Habitación de lujo, con cama de 2 plazas'},
               {ruta: './Imagenes/img2.jpg', alt: 'Habitación con cama de 2 plazas y vista al centro'},
               {ruta: './Imagenes/img3.jpg', alt: 'Habitación de lujo, con tv, sillones'},
               {ruta: './Imagenes/img4.jpg', alt: 'Habitación grande con sillon'},
               {ruta: './Imagenes/img5.jpg', alt: 'Habitación pequeña con vista al mar'},
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
    


