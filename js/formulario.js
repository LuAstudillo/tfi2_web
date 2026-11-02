        const form=document.forms["formContacto"];
       
        const inputName = form["name"];
        const inputCorreo = form["correo"];
        const inputTelefono = form["telefono"];
        const inputMensaje = form["mensaje"];
        
       const expRegCorreo = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;    
      
       const expRegName = /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]{3,30}$/;

       const expRegTelefono = /^[0-9]{10,12}$/;
        
        const errorName = document.getElementById("errorName");
        const errorCorreo = document.getElementById("errorCorreo");
        const errorTelefono = document.getElementById("errorTelefono");
        const errorMensaje = document.getElementById("errorMensaje");
        

        function validarForm(event) {
            event.preventDefault(); 
           
            let  isOk = true; 
        
           const valorName = inputName.value.trim();
           if(valorName === ""){
            isOk= false;
            errorName.innerText = "El nombre es obligatorio"
        }else if(!expRegName.test(valorName)){
           errorName.innerText = "El nombre debe tener 3 caracteres mínimo y máximo 30, deben ser solo del alfabeto español"
            
            isOk = false;
           } else {errorName.innerText = "";
           
           }
           
           const valorCorreo = inputCorreo.value.trim();
           if(valorCorreo === ""){
            isOk = false;
            errorCorreo.innerText = "El correo es obligatorio";
           }else if(!expRegCorreo.test(valorCorreo)){
            errorCorreo.innerText = "Debe ser una dirección de correo válida";
                    
            isOk = false;
           } else {errorCorreo.innerText = "";
           }


           const valorTelefono = inputTelefono.value.trim();
           if(valorTelefono === ""){
           isOk= false;
           errorTelefono.innerText = "El teléfono es obligatorio";
           }else if(!expRegTelefono.test(valorTelefono)){
            errorTelefono.innerText = "El teléfono debe tener mínimo 10 números, máximo 12";
           
            isOk = false;
           } else { errorTelefono.innerText = "";
           }
       
        const valorMensaje = inputMensaje.value.trim();
       if (valorMensaje === "") {
        isOk = false;
        errorMensaje.innerText= "El mensaje es obligatorio"
       } else if (valorMensaje.length < 15 || valorMensaje.length > 290) {
       errorMensaje.innerText = "debe tener mínimo 15 caracteres y máximo 290 ";
      isOk = false;
       }else { errorMensaje.innerText = "";
    }
        if(!isOk){
            return;
        }
        
        console.log("llegue a la parte del resumen")
const resumen = document.createElement("div");
const formResumen = document.getElementById("formResumen");
formResumen.textContent = "";
formResumen.style.display = "block";

const titulo = document.createElement("h2");
titulo.textContent = "Resumen de la consulta";

resumen.appendChild(titulo);
const parrafoNombre = document.createElement("p");
parrafoNombre.textContent = "Nombre: " + valorName;
resumen.appendChild(parrafoNombre);

const parrafoCorreo = document.createElement("p");
parrafoCorreo.textContent = "Correo: " + valorCorreo;
resumen.appendChild(parrafoCorreo);

const parrafoTelefono = document.createElement("p");
parrafoTelefono.textContent = "Teléfono: " + valorTelefono;
resumen.appendChild(parrafoTelefono);

const parrafoMensaje = document.createElement("p");
parrafoMensaje.textContent = "Mensaje: " + valorMensaje;
resumen.appendChild(parrafoMensaje);   

formResumen.appendChild(resumen);


form.reset()
    }  
         