let numeroSecreto = 0;
let intentos = 0;
const numerosRepetidos = [];
const maxAleatorio = 50;
const minAleatorio = 1;
let numeroPenultimo = maxAleatorio - minAleatorio; //nunca va a coincidir con numeroAleatorio

function asignarTexto(etiqueta, contenido){ //funcion para asignar contenido a las etiquetas HTML
    let elemento = document.querySelector(etiqueta);
    elemento.innerHTML = contenido;
    return;
}

function generarNumeroAleatorio(max, min) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function limpiarCaja() {
    document.querySelector('#numeroUsuario').value = '';
    /* 
    let caja = document.querySelector('#numeroUsuario');
    caja.value = '';
    */
}

function verificarNumUsuario() {
    let numeroUsuario = parseInt(document.getElementById('numeroUsuario').value);
    if(numeroUsuario === numeroSecreto){
        asignarTexto('h1', "¡Felicitaciones!");
        asignarTexto('p',`Acertaste el numero en ${intentos} ${(intentos === 1 ) ? 'intento' : 'intentos' }, el numero era: ${numeroSecreto} `);
        document.querySelector('#reiniciar').removeAttribute('disabled');
        document.getElementById('botonIntentar').setAttribute('disabled', 'true');
    } else{
        if(numeroUsuario > numeroSecreto){
            asignarTexto('p', 'El numero es menor');
        } else {
            asignarTexto('p', 'El numero es mayor');
        }
    }
    intentos ++;
    limpiarCaja();
    return;
}

function condicionesInicio() {
    asignarTexto('p', `Indica un numero del ${minAleatorio} al ${maxAleatorio}`);
    asignarTexto('h1', "Adivina el numero");
    intentos = 1;
    numeroSecreto = generarNumeroAleatorio(maxAleatorio, minAleatorio);
    numerosRepetidos.push(numeroSecreto);

    if(numerosRepetidos.length > 1){
        numeroPenultimo = numerosRepetidos[numerosRepetidos.length-2];
        while( numeroPenultimo == numeroSecreto){
            console.log("ENTRO WHILE con valor: " + numeroSecreto); // ------ borrar ----------
            numeroSecreto = generarNumeroAleatorio(maxAleatorio, minAleatorio);
            numerosRepetidos.push(numeroSecreto);
            console.log("Nuevo numeroSecreto generado: " + numeroSecreto); // ------ borrar ----------
         }
    }
    console.table(numerosRepetidos); // ------ borrar ----------
    return;
}

function reiniciarJuego() {
    condicionesInicio();

    document.getElementById('botonIntentar').removeAttribute('disabled');
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
    console.log(numeroSecreto); // ------ borrar ----------
    return;
}


//inicio del juego y variables ----------------
condicionesInicio();


console.log(numeroSecreto); // ------ borrar ----------


