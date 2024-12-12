function validarFormulario(){
    if(validarFormulario2()){
        alert("Formulario correcto!");
    }else{
        alert("Formulario incorrecto!");
    }
}

function validarFormulario2() {
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje');

    if (nombre.length < 3) {
        return true; 
    }

    if (!email.includes('@') || !email.includes('.')) {
        return true; 
    }

    return false;
}
