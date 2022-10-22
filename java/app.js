let saldo = 50000
let saldoPersona1
let saldoaire


function salir() {
    alert("Cerrando sesion")
}

function retirarDinero(monto) {
    if (monto > saldo) {
        alert("FONDOS INSUFICIENTES")
    } else {
        saldo -= monto
    }
    alert("RETIRO EXITOSO")
    seleccionarOpcion()
}

function consultarSaldo() {
    alert("Saldo disponible " + saldo)
    seleccionarOpcion()
}

function ingresarDinero(ingreso) {
    if (ingreso > 50000) {
        alert("No se puede ingresar esa cantidad de dinero, es demasiada")
    } else {
        saldo += ingreso;
        alert("INGRESO EXITOSO")
    }
    seleccionarOpcion()
}

function hacerTransferencia(saldoaire) {
    if (saldoaire > 50000) {
        alert("TRANSFERENCIA DEMASIADO ALTA // NO REALIZABLE")
    } else if (saldoaire <= 1500) {
        alert("TRANSFERENCIA DEMASIADO BAJA // NO REALIZABLE")
    } else {
        saldo =saldo - saldoaire;
        saldoPersona1 = saldoaire;
        saldoaire = 0;
        alert("Transferiste " + saldoPersona1 + " exitosamente")
    }
    seleccionarOpcion()
}



function seleccionarOpcion() {
    console.log("------------------------------")
    console.log("1- Hacer transferencia")
    console.log("2- Ingresar dinero")
    console.log("3- Consultar saldo disponible")
    console.log("4- Retirar dinero")
    console.log("5- Salir")

    let op = prompt("Ingrese una opcion")
    switch (op) {
        case "1":
            let saldoaire = Number(prompt("Cantidad a transferir"))
            hacerTransferencia(saldoaire)
            break

        case "2":
            let ingreso = Number(prompt("Especifique cantidad ingresada"))
            ingresarDinero(ingreso)
            break

        case "3":
            consultarSaldo()
            break

        case "4":
            let monto = Number(prompt("monto a retirar"))
            retirarDinero(monto)
            break

        case "5":
            salir()
            break

        default:
            console.log("ESA OPCION NO ES VALIDA")
    }


}


function validarUsuario(usuario) {
    if (usuario === "nicolas") {
        seleccionarOpcion()
    } else {
        alert("usuario incorrecto o inexistente")
    }
}


function entrarAlBanco() {
    let usuario = prompt("Ingrese su usuario Bancario (Solo una palabra/ sin espacios ni comas)")
    validarUsuario(usuario)
}


entrarAlBanco()