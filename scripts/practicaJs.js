// /*
// Pide un numero y muestra:

// Positivo
// Negativo
// es cero

// */

// let numero = parseInt(prompt("Ingresa un numero: "));

// if (numero === 0){
//     alert (`${numero} es 0`)
// }else if (numero < 0){
//     alert (`${numero} es negativo`)
// } else if (numero > 0){
//     alert (`${numero} es positivo`)
// }else {
//     alert ('Ingresa un numero')
// }

// /*
// Pide un numero y muestra:

// Si es par o impar usando modulo

// */

// let num2 = parseInt(prompt("Ingresa un numero: "))

// if(num2%2===0 ){
//     alert (`${num2} es par!!`)

// }else if(num2%2!==0){
//     alert (`${num2} es impar!!!`)
// }else {
//     alert `ingrese un valor valido`
// }

// /*
// Pide una edad y muestra:

// mayor de edad menor de edad

// */

// let edad = parseInt(prompt("Ingresa tu edad: "))

// if (edad >=18){
//     alert (`Tener ${edad} de edad te hace mayor de edad`)
// }else if(edad <18 && edad >=0){
//     alert (`Tener ${edad} de edad te hace menor de edad`)

// } else{
//     alert `${edad} no es un valor valido`
// }

// /* 4. Comparar dos números

// Pide dos números y muestra cuál es mayor.

// Si son iguales, mostrar “Son iguales”. */

// let num1= parseInt(prompt("Ingresa el primer numero:"))
// let num3 = parseInt(prompt("Ingresa el segundo numero"))

// if (num1===num3){
//     alert `Son iguales`
// }
// else if (num1>num3){
//     alert (`${num1} es mayor que ${num3} papus!`)
// }else if (num3>num1){
//     alert (`${num3} es mayor que ${num1} papus!`)
// }

// else {
//     alert ("Ingresaste valores no validos al menos para un numero")
// }

// /* 5
// Pide dos nums, operaciones:

// suma, resta mult div
// */

let numero1 = Number(prompt("Ingresa el primer numero: "));
let numero2 = Number(prompt("Ingresa el segundo numero: "));

let suma = numero1 + numero2;
let resta = numero1 - numero2;
let mult = numero1 * numero2;
let div = numero1 / numero2;

let operacion = prompt("QUe operacion desea realizar? +, -, *, /");

if (operacion === "+") {
  alert(`La suma de ${numero1} y ${numero2} es ${suma}.`);
} else if (operacion === "-") {
  alert(`La resta de ${numero1} y ${numero2} es ${resta}.`);
} else if (operacion === "*") {
  alert(`La multiplicacion de ${numero1} y ${numero2} es ${mult}.`);
} else if (operacion === "/") {
  alert(`La division de ${numero1} y ${numero2} es ${div.toFixed(2)}.`);
} else {
  alert("No se ingreso una operacion valida");
}

alert(`
    La suma de ${numero1} y ${numero2} es ${suma}.
    
    La resta de ${numero1} y ${numero2} es ${resta}.
    
    La multiplicacion de ${numero1} y ${numero2} es ${mult}.
    
    La division de ${numero1} y ${numero2} es ${div.toFixed(2)}.`);

/*
6. Descuento en tienda
Si una compra supera 100 soles:
aplicar 10% de descuento
Si supera 200 soles:
aplicar 20%
Mostrar total a pagar.
 
7. Número dentro de rango
Verifica si un número está entre 10 y 50.
Usa &&.
  
*/

//'₷'
let valor = Number(prompt("Ingresa el total : ₷"));

let desc100 = valor * 0.1;
let desc200 = valor * 0.2;

if (valor <= 100) {
  alert(`El total a pagar es ₷${valor}.`);
} else if (valor > 200) {
  alert(`El total a pagar es ₷${valor - desc200}.`);
} else if (valor > 100) {
  alert(`El total a pagar es ₷${valor - desc100}.`);
} else {
  alert("Ingrese valores validos");
}

let guess = parseInt(prompt("Ingresa un numero"));

if (guess >= 10 && guess <= 50) {
  alert(`${guess} se encuentra entre 10 y 50`);
} else if (guess < 10 || guess > 50) {
  alert(`${guess} no se encuentra entre 10 y 50`);
} else {
  alert("Ingresa valores validos...");
}

/*
Sistema de envío
Costo de envío:
Pedir precio de la compra
Gratis si compra > 150
15 dolares si compra <= 150
Pero:
si es cliente VIP, siempre es gratis.
*/

let compra3 = parseFloat(prompt("Total de compra:"));
let envio = parseFloat();
let tipo = prompt("Eres VIP");

if (tipo === "si" || compra3 > 150) {
  envio = 0;
} else if (compra3 <= 150) {
  envio = 15;
}

alert(`El costo de envio es: ${envio}`);

//Edad lunes 17

let edad = parseInt(prompt("Introduce edad:"));

if (edad >= 18) {
  alert("¡Felicidades, ya eres mayor de edad!");
}
alert("Aun eres menor de edad");

//2

let calificacion = parseInt(prompt("Ingrese calificacion final (1-10)"));

if (calificacion >= 5) {
  console.log("Has aprobado el examen");
}
console.log("Lo siento, has reprobado. ¡A estudiar más!");

// 3

let claveCorrecta = "javascript123";

let userPass = prompt("Introduzca su contraseña:");

if (userPass === claveCorrecta) {
  alert("Acceso concedido");
}
alert("Acceso denegado, intruso");

//4

let numeroo = parseFloat(prompt("Ingrese un numero"));

if (numeroo >= 0) {
  console.log("El número ingresado es positivo");
}

console.log("El número ingresado es negativo");

//5
let lluvia = prompt("Esta lloviendo afuera? (SI/NO)").toUpperCase();

if (lluvia === "SI") {
  alert("¡No olvides salir con tu paraguas!");
} else if (lluvia === "NO") {
  alert("¡Disfruta de un gran día soleado!");
} else alert("Ingresa una respuesta valida");

//6
let colorr = prompt("Introduce un color").toLowerCase;

if (colorr === "rojo") {
  alert("Detente por completo");
} else if (colorr === "amarillo") {
  alert("¡Precaución, baja la velocidad!");
} else if (colorr === "verde") {
  alert("Puedes avanzar");
} else {
  alert("Color no válido para un semáforo");
}

//7
let totalCompra = parseFloat(prompt("Ingresa el total de la compra"));

let descuento = parseFloat();

if (totalCompra > 100) {
  console.log("Tienes un 10% de descuento en tu compra");
} else if (totalCompra >= 50) {
  console.log("Tienes un 5% de descuento en tu compra");
}
console.log("No aplicas a ningun descuento");

//8

edad = parseFloat(prompt("Ingresa tu edad:"));

if (edad < 12) {
  console.log("Eres un niño");
} else if (edad >= 12 && edad <= 17) {
  console.log("Eres un adolescente");
} else if (edad >= 18) {
  console.log("Eres un adulto");
}

//9

let nota = parseInt();
nota = prompt("Ingrese su nota 1-10");

if (nota >= 9) {
  alert("A (Excelente)");
} else if (nota >= 7) {
  alert("B (Bueno)");
} else if (nota >= 5) {
  alert("C (Suficiente)");
} else if (nota < 5) {
  alert("F (Insuficiente)");
}

//10

let temp = parseFloat(prompt("Ingrese la temperatura actual"));

if (temp > 30) {
  alert("Hace mucho calor, ¡es un buen día para ir a la piscina!");
} else if (temp >= 15) {
  alert("El clima está agradable, ideal para ir a caminar al parque");
} else if (temp < 15) {
  alert("Hace frío, es mejor quedarse en casa viendo una película");
}

//11.

let usuario = prompt("Usuario").toLowerCase();
if (usuario === "admin") {
  let contrasena = prompt("Contraseña");
  if (contrasena === "secreto123") {
    alert("¡Bienvenido Administrador!");
  } else {
    alert("Contraseña incorrecta");
  }
} else {
  alert("Usuario no registrado");
}

//12

function ejer12() {
  const numeroSecreto = 7;

  let adivina = parseFloat(prompt("Adivina el numero"));

  if (adivina === numeroSecreto) {
    alert("¡Felicidades! Has adivinado el número secreto");
  } else if (adivina > numeroSecreto) {
    alert("Pista: El número secreto es menor");
  } else if (adivina < numeroSecreto) {
    alert("Pista: El número secreto es mayor");
  }
}

//13
function ejer13() {
  let ladoA = parseFloat(prompt("Medida lado A"));
  let ladoB = parseFloat(prompt("Medida lado B"));
  let ladoC = parseFloat(prompt("Medida lado C"));

  let equilatero = ladoA === ladoB && ladoB === ladoC;
  let escaleno = ladoA !== ladoB && ladoC !== ladoA;

  if (equilatero === true) {
    console.log("Es un triángulo Equilátero");
  } else if (escaleno === true) {
    console.log("Es un triángulo escaleno");
  } else {
    console.log("Es un triángulo Isosceles");
  }
}

function ejer14() {
  let saldo = 500;

  let cantidad = parseInt(prompt("Cuanto desea retirar?"));

  if (cantidad <= saldo) {
    saldo = saldo - cantidad;
    console.log(`
            Retiro exitoso. Tu nuevo saldo es de: $${saldo}`);
  } else {
    alert("Fondos insuficientes. No puedes retirar esa cantidad");
  }
}

function ejer15() {
  let prom = parseFloat(prompt("Ingrese su promedio: "));
  let ingresos = parseFloat(prompt("Ingresos mensuales familiares: $"));
  if (prom >= 9) {
    console.log("¡Beca aprobada por excelencia académica!");
  } else if (prom >= 7 && ingresos < 500) {
    console.log("Beca aprobada por situación socioeconómica");
  } else {
    console.log("Beca rechazada");
  }
}

//bucles

//1
function bucle1() {
  let number = Number(prompt("Introduzca un numero:"));

  for (let i = 1; i <= number; i++) {
    if (i % 2 === 0) {
      console.log(`${i} es par`);
    } else if (i % 2 === 1) {
      console.log(`${i} es impar`);
    } else {
      console.log("Ingrese un valor valido");
    }
  }
}

//Alcancia digital

function bucles2() {
  let ahorros = 0;
  let input = parseInt(1);
  while (input > 0) {
    input = parseFloat(prompt("Cuanto desea ahorrar? "));
    ahorros = ahorros + input;
  }
  console.log(`El total ahorrado es $${ahorros}`);
}

function bucles3() {
  let opcion;

  do {
    opcion = Number(
      prompt(`
        1. Ver perfil
        2. Configuracion
        3. Salir
        
        `),
    );

    if (opcion === 1) {
      console.log("Abriendo perfil...");
    } else if (opcion === 2) {
      console.log("Escribiendo configuracion...");
    }
  } while (opcion !== 3);

  console.log("Pase un buen dia");
}

function bucle4() {
  let tabla = Number(prompt("De que numero quiere ver la tabla? "));

  for (let i = 1; i < 11; i++) {
    resultado = tabla * i;
    if (resultado > 50) {
      console.log("Resultado muy grande");
    } else {
      console.log(`${tabla} * ${i} = ${resultado}`);
    }
  }
}

function bucle5() {
  let num = 20;

  while (num > 0) {
    if (num === 15 || num === 10 || num === 5) {
      console.log("Peligro");
    } else {
      console.log(num);
    }
    num = num - 1;
  }
}

/* 
6. Cajero automático con bloqueador de tarjeta (while)
Enunciado: Guarda la contraseña de una tarjeta en una variable (por ejemplo: "9999"). El programa debe pedirle al usuario que introduzca su contraseña para cobrar su dinero. Si se equivoca, el programa debe permitirle intentar de nuevo mediante un bucle, pero solo tiene un máximo de 3 intentos. Si falla los 3 intentos, el bucle termina y muestra un alert() que diga "Tarjeta bloqueada por seguridad". Si acierta antes de agotar los intentos, muestra "Acceso concedido".*/

function bucle6() {
  let contraTarjeta = "9898";

  while (true) {
    for (let i = 1; i <= 3; i++) {
      let contraUsuario = prompt("Ingrese el pin de su tarjeta");
      if (contraUsuario === contraTarjeta) {
        console.log("Acceso Concedido");
        break;
      } else {
        console.log(`Le quedan ${3 - i} intentos`);
      }
      if (3 - i === 0) {
        console.log("Tarjeta bloqueada por seguridad");
        break;
      }
    }
    break;
  }
}

/*
7. Calculadora de promedio flexible (while)
Enunciado: Crea un programa que permita calcular el promedio de calificaciones de un alumno, pero el profesor no sabe cuántas notas tiene en total. El programa debe pedir notas una por una usando prompt(). El bucle debe seguir pidiendo notas hasta que el profesor escriba -1 (este será el código de salida). Al terminar, el programa debe calcular el promedio exacto de las notas válidas ingresadas y mostrarlo en la consola.*/

function bucle7() {
  let nota = Number();
  let sumaNotas = Number();
  let counter = 0;

  while (true) {
    nota = Number(prompt("Ingrese la nota, ingrese -1 para salir"));
    if (nota !== -1) {
      sumaNotas += nota;
      counter += 1;
    } else {
      break;
    }
  }

  let promedio = sumaNotas / counter;
  console.log(`Su promedio es ${promedio}`);
}

/*
8. El detector de productos costosos (do while)
Enunciado: Un usuario está registrando los precios de sus compras del supermercado. Usando un bucle do while, pide al usuario que ingrese el precio de un producto. Si el precio ingresado es mayor a $100, el programa debe acumularlo en una variable y contar cuántos productos caros se han comprado. El bucle se detiene cuando el usuario escribe 0. Al final, muestra un alert() diciendo: "Compraste [cantidad] productos caros y el total de ellos es $[total]".*/

function bucle8() {
  let counter = 0;
  let precioBase = 0;
  let precio = 0;
  do {
    precioBase = Number(prompt("Ingrese el precio. Presione 0 para salir"));
    if (precioBase > 100) {
      precio += precioBase;
      counter += 1;
    }
  } while (precioBase !== 0);
  console.log(
    `Compraste ${counter} productos caros y el total de ellos es ${precio}`,
  );
}

/*9. El número secreto con 5 vidas (for)
Enunciado: Define un número secreto al inicio de tu código. El usuario tiene exactamente 5 intentos (vidas) para adivinarlo usando un bucle for. En cada intento, el programa le pide el número.
Si lo adivina, muestra un alert() de victoria y debes usar la instrucción break para romper el bucle inmediatamente.
Si no lo adivina y se le acaban las 5 vidas, el bucle termina normalmente y muestra un alert() de "Game Over".*/

function bucle9() {
  let clave = "1234";
  let vidas = 5;

  for (vidas; vidas > 0; vidas--) {
    let respuesta = prompt("Ingrese el codigo secreto");

    if (respuesta === clave) {
      console.log("Has adivinado, crack!!");
      break;
    } else {
      console.log(`Te quedan ${vidas - 1} intentos.`);
    }
    if (vidas - 1 === 0) {
      console.log("GAME OVER");
    }
  }
}

/*10. El recolector de opiniones (for)
Enunciado: Imagina que estás haciendo una encuesta de satisfacción a 5 clientes. Usando un bucle for que se repita 5 veces, pide a cada usuario que califique un servicio del 1 al 5. Al final del bucle, el programa debe evaluar: si la mayoría de las calificaciones fueron de 4 o 5, muestra en la consola "El servicio fue un éxito". Si no, muestra "El servicio necesita mejorar"
*/

function bucle10() {
  let csat = 0;
  let counter = 0;

  for (let i = 0; i < 5; i++) {
    csat = Number(prompt("Ingrese su nivel de satisfaccion. (1-5) "));
    if (csat > 3) {
      counter += 1;
    }
  }
  if (counter >= 3) {
    console.log("El servicio fue un exito");
  } else {
    console.log("El servicio necesita mejorar");
  }
}

//Pidiendo el valor de radio al usuario.

let radio = Number(
  prompt(`
Ingresa el radio en centimetros:
`),
);

//Llamando la funcion:

//el if revisa si la respuesta es un numero
if (!isNaN(radio)) {
  areaCirculo(radio);
} else {
  console.log("Ingrese valores numericos en cms solamente");
}

//Declarando funcionamiento de la funcion:
function areaCirculo(radio) {
  let area = Math.PI * radio ** 2;

  console.log(`el area es ${area.toFixed(2)}`);
}

function calculadora() {
//Cuerpo del programa

let respuesta = prompt("Que desea realizar? (+,-,*,/) ")
let num1 = Number(prompt("Primer numero"))
let num2 = Number(prompt("Segundo numero"))


if (respuesta==="+"){
  console.log (sumar(num1,num2));
} else if (respuesta==="-"){
  console.log (restar(num1,num2));
} else if (respuesta==="*"){
  console.log (multiplicar(num1,num2));
} else if (respuesta==="/"){
  console.log (dividir(num1,num2));
}else{
  console.log("Ingrese una operacion valida")
}

//Funciones
  function sumar(num1, num2) {
    return num1 + num2
  }

  function restar(num1, num2) {
    return num1 - num2
  }

  function multiplicar(num1, num2) {
    return num1 * num2
  }

  function dividir(num1, num2) {
    return num1 / num2
  }
}


