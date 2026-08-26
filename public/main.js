import { cambiarImagen } from "./scripts.js";
import {heroIMG,nombre,Skills,aboutME,MainSkills,otherSkills} from "./objeto.js";
import {darkMode} from "./darkmode.js"

//Funciones de efectos
darkMode()
setInterval(cambiarImagen, 5000);
//Funciones de objeto
heroIMG()
nombre()
Skills()
aboutME()
MainSkills()
otherSkills()