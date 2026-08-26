//Llamo funcion principal:
calcularPeso();

//Funcion que realiza los calculos:
function pesoPlanetario(planeta, pesoTierra) {
  if (planeta === "mercurio") {
    return pesoTierra * 0.38;
  } else if (planeta === "venus") {
    return pesoTierra * 0.905;
  } else if (planeta === "luna") {
    return pesoTierra * 0.165;
  }
}

//Funcion Principal:
function calcularPeso() {
  let peso = Number(prompt("Ingrese su peso en la tierra\n"));
  let cuerpoCeleste = prompt(
    "\nSeleccione el cuerpo celeste donde quiera calcular su peso (venus, luna, mercurio)\n",
  );

  if (
    !isNaN(peso) &&
    (cuerpoCeleste.toLowerCase() === "mercurio" ||
      cuerpoCeleste.toLowerCase() === "venus" ||
      cuerpoCeleste.toLowerCase() === "luna")
  ) {
    let respuesta = pesoPlanetario(cuerpoCeleste, peso);
    console.log(`Su peso en ${cuerpoCeleste} sería ${respuesta.toFixed(2)}`);
  } else console.log("Ingrese un valor valido.");
}
