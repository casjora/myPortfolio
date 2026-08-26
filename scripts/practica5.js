ejercicio_7();

/* 
Ejercicio 1 – Calculadora de Promedio y Rendimiento
Pide al usuario cuatro notas (del 0 al 100).
Calcula el promedio y muestra un mensaje según el resultado:

“Excelente” si el promedio es mayor o igual a 90

“Bueno” si es mayor o igual a 75

“Regular” si es mayor o igual a 60

“Insuficiente” en caso contrario

Instrucciones:
Usa if-else-if y operadores lógicos para determinar el mensaje.
Muestra el resultado con console.log() o alert().
 */

function ejercicio_1() {
  let nota_1 = Number(prompt("Ingrese la primera nota: "));
  let nota_2 = Number(prompt("Ingrese la segunda nota: "));
  let nota_3 = Number(prompt("Ingrese la tercera nota: "));
  let nota_4 = Number(prompt("Ingrese la cuarta nota: "));

  let promedio = (nota_1 + nota_2 + nota_3 + nota_4) / 4;

  if (promedio >= 90) {
    alert("Excelente");
  } else if (promedio >= 75) {
    alert("Bueno");
  } else if (promedio >= 60) {
    alert("Regular");
  } else if (promedio < 60) {
    alert("Insuficiente");
  } else {
    alert("Ingrese valores validos");
  }
}

/* 
Ejercicio 2 – Calculadora de Tarifa de Transporte
El programa debe pedir al usuario:

Su edad

Si es estudiante (“sí” o “no”)

La distancia que recorrerá (en kilómetros)

Reglas del costo:

Menores de 18 pagan 50% del precio base

Estudiantes pagan 75% del precio base

Mayores de 60 pagan 40% del precio base

Si el viaje es mayor a 30 km, se agrega un 10% adicional al total

Instrucciones:
Usa condiciones anidadas (if, else if, else) y operadores lógicos para determinar el costo final.
*/

function ejercicio_2() {
    let distancia;
    let edad;
    let estudiante;
    let base = 100;
    let total;

    edad = Number(prompt("Por favor ingresa tu edad: "));
    estudiante = prompt("Eres estudiante? (si/no): ");
    distancia = Number(prompt("Que distancia recorreras en Km? "));

    if (distancia >30){
        base = base+base*0.1;
        if (edad > 60){
            base = base*0.4;
            if (estudiante==="si"){
                base = base*0.75;
            }

        }else if(edad<18){
            base = base*0.5;
            if(estudiante==="si"){
                base = base*0.75;
            }
        }

    }else if(distancia<=30){
        if (edad > 60){
            base = base*0.4;
            if (estudiante==="si"){
                base = base*0.75;
            }

        }else if(edad<18){
            base = base*0.5;
            if(estudiante==="si"){
                base = base*0.75;
            }
        }
    }
    total = base;
    alert (`El total a pagar es ${total}`)
}


/* 
Ejercicio 3 – Menú de Conversión de Unidades
Muestra un menú con 4 opciones:

Convertir de Celsius a Fahrenheit

Convertir de Fahrenheit a Celsius

Convertir de Metros a Kilómetros

Convertir de Kilómetros a Metros

El usuario debe elegir una opción y escribir el valor a convertir.
El programa mostrará el resultado correspondiente.

Instrucciones:
Usa switch-case para realizar las conversiones y prompt() para las entradas.
*/

function ejercicio_3(){
    let celsius;
    let fah;
    let meters;
    let kilom;
    let convert;


    let opcion = prompt(`Menu de Opciones: (Ingresa el numero de la opcion correspondiente)

        1. Celsius a Fahrenheit
        2. Fahrenheit a Celsius
        3. Metros a Kilometros
        4. Kilometros a Metros
        
        `)
    if (opcion==="1"){
        celsius = Number(prompt(`Write the amount of Celsius to convert to F`));
        convert = (celsius * 9/5) + 32;
    }else if(opcion==="2"){
        fah = Number(prompt(`Write the amount of Fahrenheit to convert to C`));
        convert = (fah - 32) * 5/9;
    }else if(opcion==="3"){
        meters = Number(prompt(`Write the amount of meters to convert to Km`));
        convert = meters/1000;
    }else if(opcion==="4"){
        kilom = Number(prompt(`Write the amount of kilometers to convert to mts`));
        convert = kilom *1000;
    }

    alert (`The conversion result is: ${convert}` )
}




/* 
Ejercicio 4 – Sistema de Descuentos en una Tienda
El usuario debe ingresar:

El precio total de su compra

Si tiene tarjeta de cliente frecuente (“sí” o “no”)

Reglas:

Si el total es mayor a 500, aplica un 10% de descuento

Si además tiene tarjeta, aplica un 5% adicional

Si el total es menor o igual a 100, aplica un recargo del 5%

El programa debe mostrar el precio final y un mensaje indicando qué descuento se aplicó.

Instrucciones:
Utiliza operadores de asignación y condiciones anidadas para determinar el total.
*/
function ejercicio_4(){
    let compra = parseInt(prompt("Ingrese el precio total: "))
    let membresia = prompt("Tiene tarjeta de cliente frecuente? (si/no)")

    let total = compra
    let mensaje="No incluye ningun descuento"

    if (compra <=100){
        total = compra *1.05
    }

    if (compra>500){
        total = compra - (compra*0.1)
        if(membresia ==="si"){
            total = total - total*0.05
            mensaje ="Se aplicó 10% de descuento por compra superior a 500 y 5% adicional por tener membresia"

        }else{
            mensaje="Se aplico descuento de 10% por compra superior a 500, le invitamos a adquirir su membresia ya que hubiese ahorrado un 5% adicional"

        }

    }

    alert (`El total de su compra es ${total}.
        
        ${mensaje}`)


}



/* 
Ejercicio 5 – Calculadora de Edad y Etapa de Vida
Pide al usuario:

Su año de nacimiento

El año actual

Calcula su edad y muestra un mensaje según el rango:

Menor de edad: menos de 18 años

Adulto joven: entre 18 y 30 años

Adulto: entre 31 y 59 años

Adulto mayor: 60 años o más

BONUS:
Pregunta además si ya cumplió años este año (“sí” o “no”) y ajusta la edad si es necesario.

Instrucciones:
Usa operadores de comparación, if-else-if, y parseInt() para convertir los datos numéricos.


*/

function ejercicio_5(){
    let yearBirth = parseInt(prompt("Ingrese su año de nacimiento"))
    let actualYear = parseInt(prompt("Ingrese año actual"))
    let cumple= prompt("Cumplio años ya este año? (si/no)")

    let mensaje
    let edad = actualYear-yearBirth


    if (cumple ==="no"){
        edad = edad-1

    }


    if (edad < 18){
        mensaje = "Menor de edad"

    } else if (edad >=18 && edad <=30){
        mensaje = "Adulto Joven"

    }else if (edad >=31 && edad <=59){
        mensaje = "Adulto"

    }else if (edad >=60){
        mensaje = "Adulto mayor"

    }else {
        alert ('Ingrese un valor valido')
    }

    alert (`Ud tiene ${edad} años de edad por lo que se considera un ${mensaje}`)
}


/* Practica 2 sistema de descuento tienda */

function ejercicio_6 () {
    let compra = parseFloat(prompt("Ingresa el total de la compra"))
    let membresia = prompt("Tienes membresia premium? (si/no)")
//premium
    let desc = parseInt()


    let total
    
    if (compra >100 && compra <=300) {
        if (membresia ==="si" ) {
            desc = compra *0.2
            
        }else {
            desc = compra * 0.1
        }
    }else if(compra >300)
    {
        if(membresia==="si"){
            desc = compra *0.3

        }
    } 
     total= compra-desc
    alert (`Subtotal: ${compra}
        Descuento Aplicado: ${desc}
        Total: ${total}`)

}

function ejercicio_7 () {
    let nota = parseInt(prompt("Ingrese la calificacion: "))
    
    if (nota>=11) {
        let asistencia = parseInt(prompt("Cual es el porcentaje de asistencia?"))
        if (asistencia >=80) {
            alert ("Estudiante aprobado")
            
        }else{
            alert ("Aprobo examen pero desaprobó por faltas")
        }

        
    } else {
        alert ("Desaprobado")
        
    }

}