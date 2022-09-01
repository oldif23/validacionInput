let frutas = ["Banana", "naranja", "manzana", "Mango"];
let palabraIngresada = document.querySelector(".input-txt");
let pruebasBtn = document.querySelector('.prueba');
console.log(frutas.includes("mango"));

function validarTexto(){
    console.log(palabraIngresada.value);
    console.log(frutas.includes(palabraIngresada.value));
}

function validar2() {
    if(!palabraIngresada.checkValidity()) {
        palabraIngresada.classList.add("Invalido");
    alert('SOLO MINUSCULAS SIN NUMEROS NI CARACTERES!!.');
    } else {
        palabraIngresada.classList.remove("Invalido");
    validarTexto();
    }
}


pruebasBtn.addEventListener('click',validar2);