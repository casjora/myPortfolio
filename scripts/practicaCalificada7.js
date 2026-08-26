//Ejercicio 1

function calcularAreaTriangulo(base, altura) {
  return (base * altura) / 2;
}

for (let i = 1; i <= 3; i++) {
  let base = Number(prompt("Ingrese la base"));
  let altura = Number(prompt("Ingrese la altura"));

  if (base > 0 && altura > 0) {
    let area = calcularAreaTriangulo(base, altura);
    console.log(`El area numero ${i} es ${area}`);
  } else {
    console.log(`Triangulo ${i}: Los datos deben ser mayores de 0.`);
  }
}

//variable ejercicio 1

function calcularAreaTriangulo2(base, altura) {
  return (base * altura) / 2;
}
let areas = [];

for (let i = 1; i <= 3; i++) {
  let base = Number(prompt("Ingrese la base"));
  let altura = Number(prompt("Ingrese la altura"));

  if (base > 0 && altura > 0) {
    let area = calcularAreaTriangulo2(base, altura);
    areas.push(`Area del triangulo ${i} es ${area}`);
  } else {
    console.log(`Triangulo ${i}: Los datos deben ser mayores de 0.`);
  }
}

console.log(`
            Resultados Finales:
            
${areas.join("\n")}`);

//Ejercicio 2
function convertirAFahrenheit(celsius) {
  return (9 / 5) * celsius + 32;
}

let conversiones = [];
for (let i = 1; i <= 5; i++) {
  let celsius = Number(prompt("Ingrese la temperatura en Celsius\n"));

  if (!isNaN(celsius)) {
    let conversion = convertirAFahrenheit(celsius);
    conversiones.push(
      `La conversion de °C${celsius} a °F es °F${conversion.toFixed(2)} `,
    );
  } else {
    console.log("Valor no valido, use numeros");
  }
}

console.log(`
${conversiones.join("\n")}`);

//Ejercicio 3

function contarVocales(texto) {
  let counter = 0;
  let textoP = texto.toLowerCase();
  for (const letra of textoP) {
    if (
      letra === "a" ||
      letra === "e" ||
      letra === "i" ||
      letra === "o" ||
      letra === "u"
    ) {
      counter += 1;
    }
  }
  return counter;
}

let vocales = [];

for (let i = 0; i < 3; i++) {
  let palabra = prompt(`Ingrese la palabra ${i + 1}\n`);

  vocales.push(
    `\nLa palabra ${palabra} tiene ${contarVocales(palabra)} vocales`,
  );
}
console.log(vocales.join("\n"));

//Ejercicio 4

function clasificarParesImpares(num1, num2) {
  for (let i = inicio; i <= fin; i++) {
    if (i % 2 === 0) {
      console.log(`${i} es par`);
    } else {
      console.log(`${i} es impar`);
    }
  }
}

let inicio = Number(prompt("Ingresa el numero de inicio \n"));
let final = Number(prompt("Ingresa el numero final del rango \n"));

clasificarParesImpares(inicio, final);

//Ejercicio 5

function mayorYSuma(listaDeNumeros) {
  let mayor = listaDeNumeros[0];
  let suma = 0;

  for (let numero of listaDeNumeros) {
    suma += numero;

    if (numero > mayor) {
      mayor = numero;
    }
  }

  console.log(`Los resultados son:
Numero mayor entre ${listaDeNumeros} es ${mayor}
La suma total es: ${suma}`);
}

