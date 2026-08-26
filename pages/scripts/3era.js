let tiendaElectronica = [
    {
        id: 1,
        producto: "Laptop Pro 15",
        categoria: "Computadoras",
        precio: 1200,
        stock: 15,
        especificaciones: { ram: "16GB", ssd: "512GB", procesador: "i7" },
        etiquetas: ["novedad", "oferta", "trabajo"],
        disponible: true
    },
    {
        id: 2,
        producto: "Mouse Inalámbrico",
        categoria: "Accesorios",
        precio: 25,
        stock: 120,
        especificaciones: { color: "Negro", DPI: 1600 },
        etiquetas: ["economico"],
        disponible: true
    },
    {
        id: 3,
        producto: "Monitor 4K",
        categoria: "Monitores",
        precio: 450,
        stock: 0,
        especificaciones: { tamaño: "27 pulgadas", tasaRefresco: "144Hz" },
        etiquetas: ["gaming", "oferta"],
        disponible: false
    },
    {
        id: 4,
        producto: "Teclado Mecánico",
        categoria: "Accesorios",
        precio: 85,
        stock: 45,
        especificaciones: { switch: "Red", retroiluminado: true },
        etiquetas: ["gaming", "ergonomico"],
        disponible: true
    },
    {
        id: 5,
        producto: "Webcam HD",
        categoria: "Accesorios",
        precio: 60,
        stock: 10,
        especificaciones: { resolucion: "1080p", microfono: true },
        etiquetas: ["trabajo"],
        disponible: true
    }
]

let precio
let producto

for (let index = 0; index < tiendaElectronica.length; index++) {
    producto = tiendaElectronica[index].producto;
    precio = tiendaElectronica[index].precio;

    console.log(`El precio de ${producto} es ${precio}`)
}



for (let elemento of tiendaElectronica) {
    producto = elemento.producto;
    precio = elemento.precio;

    console.log(`El precio de ${producto} es ${precio}`);
}


let listaPrecios = tiendaElectronica.map(elemento => {
    return `MAP El precio de ${elemento.producto} es ${elemento.precio}`;
});

console.log(`Productos en existencia`)
for (let element of tiendaElectronica) {
    console.log(`${element.producto}`)
    if(element.stock>0){
        console.log(`${element.producto}`)
    }else if(element.stock<=10){
        console.log(`${element.producto}`)
    }
    
}

console.log(`\nMAP Productos en existencia:`);
tiendaElectronica.map(element => {
    // Si hay stock, lo imprimimos
    if (element.stock > 0) {
        console.log(element.producto);
    }
});


console.log(`\n Menor o Igual a 10`)

for (let element of tiendaElectronica) {
    console.log(`${element.producto}`)
    if(element.stock<=10){
        console.log(`${element.producto}`)
    }  
}
console.log(`\nMAP Menor o Igual a 10:`);
tiendaElectronica.map(element => {
    if (element.stock <= 10) {
        console.log(element.producto);
    }
});



console.log(`\n Incluye Ofertas`)
for (let element of tiendaElectronica) {
    if(element.etiquetas.includes("oferta")){
        console.log(`${element.producto}`)
    }
    
}

console.log(`\nMAP Incluye Ofertas:`);
tiendaElectronica.map(element => {
    if (element.etiquetas.includes("oferta")) {
        console.log(element.producto);
    }
});


//4 pedir limite de precio

let limitePrecio=Number(prompt("Cual es su presupuesto limite?\n"))

console.log(`\nLimite de precio <= ${limitePrecio}`)
for (let element of tiendaElectronica) {
    if (element.precio<=limitePrecio){
        console.log(`${element.producto} - ${element.precio}`)
    }
    
}


let paises = ["noruega","chile","colombia","paraguay"]

let paisMayusculas = paises.map(pais => {
    pais.toUpperCase()
})

console.log(paisMayusculas)


//1
let productos = ["Laptop", "Mouse", "Teclado"];

let resultado = productos.map(prod => `Producto: ${prod}`)
console.log(resultado)

//2
let palabras = ["sol", "computadora", "javascript"];

let totalLetras = palabras.map(palabra => palabra.length())

console.log(totalLetras)

//3
let numeros = [-5, -8, -2];
let convertidos = numeros.map(numero => numero*-1)
console.log(convertidos)

//4
let minutos = [1, 2, 5, 10];

let segundos = minutos.map(minuto => minuto*60)
console.log(segundos)

//5
let numeros = [1, 2, 3, 4];

numstrings = numeros.map(numero=> toString(numero))

console.log(numstrings)

//6
let usuarios = ["juan", "ana", "carlos"];
let emails = usuarios.map(usuario => `${usuario}@gmail.com`)
console.log (emails)

/* 1 Sumar 10: Suma 10 a cada número del array. */
let numeros = [5, 12, 8, 130, 44];
let suma10 = numeros.map(numero=> numero+10);

console.log(suma10)

/* 2 Saludos: Crea un mensaje de bienvenida para cada nombre. */
let nombres = ["Ana", "Juan", "Pedro", "Maria"];
let saludo = nombres.map(nombre=> `Hola ${nombre}`)

console.log(saludo)

/* 3 Invertir signo: Convierte los números positivos a negativos y viceversa. */

let valores = [10, -5, 20, -1, 0];
let signosInvertidos = valores.map(valor=> valor*-1)
console.log(signosInvertidos)

/* 4 Longitud de palabras: Devuelve cuántas letras tiene cada fruta. */

let frutas = ["manzana", "pera", "uva", "sandía"];
let conteoFrutas = frutas.map(fruta=>fruta.length)
console.log(conteoFrutas)

/* 5 Convertir a porcentaje: Divide cada número por 100. */
let puntajes = [50, 75, 90, 100, 20];
let decimales = puntajes.map(puntaje=> puntaje/100)
console.log(decimales)

/* 6 ¿Es par?: Devuelve true si el número es par y false si es impar. */

let numeros = [1, 2, 3, 4, 5, 6];
let queEs = numeros.map(numero=>{if(numero%2===0){
    return `par`
}else if (numero%2===1){
    return `impar`
}}
)
console.log(queEs)

/* 7 Repetir cadena: Crea un array donde cada palabra se repita dos veces separada por un espacio. */
let palabras = ["hola", "mundo", "javascript"];

let dosVeces = palabras.map(palabra => `${palabra} ${palabra}`)
console.log(dosVeces)

/* 8 Año de nacimiento: Si el año actual es 2026, calcula el año de nacimiento restando la edad a 2026. */
let edades = [20,35,18,50];

let birthYear = edades.map(edad=> 2026-edad)
console.log(birthYear)

/* 9 Descuento del 10%: Resta el 10% a cada precio del array. */
let precios = [100, 200, 50, 10];
let descuento = precios.map(precio=> precio*0.9)
console.log(descuento)

/* 10 Comprobación de longitud: Devuelve true si la palabra tiene más de 5 letras, de lo contrario false. */
let palabras = ["sol", "bicicleta", "auto", "computadora"];

let validacionDeLongitud = palabras.map(palabra=> {if (palabra.length>5){
    return true

}else if(palabra.length <=5){
    return false
}
 })
console.log(validacionDeLongitud)

/* 11 Aprobado o Reprobado: Si la nota es mayor o igual a 11, escribe "Aprobado", si no, "Reprobado". */
let notas = [15, 8, 12, 5, 20];
let aprobado = notas.map(nota=>{ if (nota>=11)
{
    return `Aprobado`
}else{
    return `Reprobado`
}

}
)

console.log(aprobado)

/* 12 Conversor de unidades con validación: Convierte distancias de metros a kilómetros. Si el valor es menor a 1000m, devuelve el valor en metros con la etiqueta "m"; si es mayor, en kilómetros con "km". */

let distancias = [500, 1500, 200, 3000];

let conversor = distancias.map(function (distancia) {
    if(distancia<1000){
        return `${distancia} m`
    }else{
        return `${distancia/1000}km`
    }
}  )

console.log(conversor)
/* 
Objetos
13 Transformación profunda de objetos: Dado un array de productos, devuelve un nuevo array donde los productos con stock menor a 5 tengan una propiedad extra llamada urgente: true. */
let inventario = [{id: 1, stock: 2}, {id: 2, stock: 10}, {id: 3, stock: 3}];

let nuevoInv = inventario.map(function (articulo)
{
    if (articulo.stock<5){
        return {...articulo, urgente:true}
    }else{
        return {...articulo}
    }
}
)
console.log(nuevoInv)

/* 14 Cálculo de promedio dinámico: Dado un array de objetos con notas (un array de números), devuelve un nuevo array con el nombre del alumno y su promedio calculado. */

let alumnos = [{nombre: "Ana", notas: [15, 18, 12]}, {nombre: "Luis", notas: [10, 11, 9]}];

let promedioCalculado = alumnos.map(function (alumno){
    let acumulador = 0;
    for (const element of alumno.notas) {
        acumulador+=element
    }
    let promedio = acumulador / alumno.notas.length
    return `${alumno.nombre} - ${promedio}`
})

console.log(promedioCalculado)

/*
Alternativa
const promedios = alumnos.map(a => `${a.nombre} - ${a.notas.reduce((acc, n) => acc + n, 0) / a.notas.length}`);

console.log(promedios); 
 Resultado: [ 'Ana - 15', 'Luis - 10' ] */

 