// Sistema para parqueadero en consola 
// Debe permitir:
// 1. Registrar un vehiculo (placa, tipo vehiculo, hora de entrada, hora salida)
// 2. Mostrar vehiculos que estan en el parqueadero
// 3. Retirar un vehiculo por placa
// 4. Terminar el programa
// Debemos usar funciones para tener todo ordenado
// Usaremos una lista (arreglo) de objetos para guardar los vehiculos
// Cada objeto tendrá: placa, tipo, horaEntrada y horaSalida
// La tarifa sera si es moto 1000 por hora si es carro 2000 por hora.
const readline = require("readline-sync");

let parqueadero = [];

// Funcion VOID
function mostrarMenu() {
    console.log('\n SISTEMA DE PARQUEADERO');
    console.log("1. Registar vehiculo");
    console.log("2. Mostrar vehiculos");
    console.log("3. Retirar vehiculo");
    console.log("4. SALIR");

    const opcion = readline.question("Ingrese una opcion: ");

    switch(opcion) {
        case "1":
            // REGISTRAR VEHICULO
            solicitarInformacionVehiculo();
            break;
        case "2":
            // MOSTRAR VEHICULOS
            mostrarVehiculos();
            break;
        case "3":
            // RETIRAR VEHICULO
            break;
        case "4":
            // SALIR
            console.log("Hasta luego 👋");
            return;
        default:
            console.log("Opcion no valida");
    } 
    mostrarMenu();
}

function solicitarInformacionVehiculo() {
    const placa = readline.question("Ingrese la placa: ");
    const tipo = readline.question("Ingrese el tipo (carro/moto): ");
    registrarVehiculo(placa, tipo);
}

function registrarVehiculo(placa, tipo) {
    const horaEntrada = Date.now();
    const vehiculo = {placa, tipo, horaEntrada}
    parqueadero.push(vehiculo);
    console.log("El vehiculo fue registrado correctamente");
}

function mostrarVehiculos() {
    if(parqueadero.length === 0) {
        console.log("No hay vehiculos en el parqueadero.");
        return;
    }

    // parqueadero.forEach((vehiculo) => console.log(`Placa: ${vehiculo.placa} - Tipo: ${vehiculo.tipo} - Hora Entrada: ${vehiculo.horaEntrada} `))
    parqueadero.forEach((vehiculo, i) => console.log(`${i + 1}. Placa: ${vehiculo.placa} - Tipo: ${vehiculo.tipo} - Hora Entrada: ${new Date(vehiculo.horaEntrada).toLocaleTimeString()} `))
}


mostrarMenu();
const horaEnMs = Date.now();
let fechaEntrada = new Date(horaEnMs)
fechaEntrada.toLocaleTimeString();
// const horaEntrada = new Date();
// console.log(horaEntrada.toLocaleTimeString());
// console.log(horaEntrada.)