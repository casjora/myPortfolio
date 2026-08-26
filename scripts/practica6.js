let saldo = parseFloat()
let opcion;

do {alert (`
    Bienvenido a Banco Rafiki... 
    No nos robamos su dinero... ;)`)
    

    opcion = prompt(`
        Seleccione el numero correspondiente a la opcion deseada:
        
        1. Depositar
        2. Retirar
        3. Consultar
        
        0. Salir`)

    switch (opcion) {
        case "1":
            ingreso();
            
            break;
        case "2":
            retiro();
            break;
        case "3":
            consulta();
            break;
    
        default:
            break;
    }
    
} while (opcion!=="0");
alert ("Gracias por su preferencia!")


function ingreso(){
    alert ("Bienvenido al area de depositos")

    let deposito = parseFloat(prompt("Cuanto desea depositar?"));

    if (deposito >0){
        saldo = saldo + deposito;
        alert ("Deposito exitoso")

    } else{
        alert("Ingrese un numero positivo, evite carateres no numericos")
    }
    


}

function retiro() {
    alert ("Bienvenido al area de retiros")
    let retiro = parseFloat(prompt(`Cuanto desea retirar?`))

    if (retiro <=saldo && retiro > 0){
        saldo = saldo-retiro
        alert (`Retiro Exitoso!`)

    } else if(retiro > saldo){
        alert (`Su monto a retirar ($${retiro}) es mayor que sus fondos disponibles $${saldo}`)
    }else {
        alert (`Ingrese montos validos`)
    }
    
}

function consulta() {
    alert ("Bienvenido al area de consulta")
    alert (`Su saldo es $${saldo}`)
    
}