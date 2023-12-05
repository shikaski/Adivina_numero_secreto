const readlineSync = require('readline-sync');
const {verificarAdivinanza, generarNumeroAleatorio} = require('./adivinanza');

const obtenerNumeroUsuario = () => {
    return readlineSync.question('Ingresa un numero: ');
};

const juegoAdivinanza = () => {
    const numeroSecreto = generarNumeroAleatorio();
    let numeroAdivinado = 0;

    console.log('!Bienvenido a Adivinia el numero secreto');
    console.log('intenta adivinar el numero del 1 al 100. \n');
    console.log(numeroSecreto);
    while (numeroAdivinado != numeroSecreto){
        numeroAdivinado = obtenerNumeroUsuario();
        verificarAdivinanza(numeroSecreto,numeroAdivinado);
    }

}

juegoAdivinanza();