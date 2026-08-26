const rafael =
  {
    name: "Rafael Lopez",
    fullName: "Jose Rafael Lopez Castillo",
    habilidadesTecnicas:[{name: "HTML",nivel:90},
    {name:"CSS",nivel: 80},
    {name:"Javascript",nivel: 80}],
    description: [`I'm a passionate Frontend Developer, I started coding when I was 16 but I had never had the chance to work in this field. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto iusto nobis quis ea eaque molestias obcaecati quisquam. Ut, quidem labore?`,
    `Programming to me is like a sneak peek of creation. God is the Great Programmer and his creation is the UI for his children.`],
    skills: [
      "/icons/html-5.svg",
      "/icons/css.svg",
      "/icons/js.svg",
      "/icons/sql-database.svg",
      "/icons/python.svg",
      "/icons/csharp.svg",
      "/icons/looker.svg",
      "/icons/linux.svg",
    ],
    additionalSkills:["./icons/sheets.svg",
        "./icons/tableau.svg",
        "./icons/microsoft-office.svg","./icons/ms-excel.svg",
        "./icons/microsoft-word.svg"] ,
    imgProfile: ["/images/me-1-bg.png",
    "/images/me-2-bg.png",
    "/images/me-3-bg.png",
    "/images/me-4-bg.png",
    "/images/me-5-bg.png",]
  }

  //Hero IMG
const heroContainer = document.getElementById("hero-img-container")
const heroImg = document.createElement("img")

let profileImg = rafael.imgProfile

heroImg.src=`${profileImg[0]}`
heroImg.alt = "Mi foto de perfil"
heroImg.id ="hero-img"
heroImg.className="md:w-100 drop-shadow-[0_-50px_40px_rgba(227,255,106,0.5)] object-contain w-80 transition-opacity duration-1000"

function heroIMG () {heroContainer.appendChild(heroImg)
}

//Nombre H1
const name = document.getElementById("mi-nombre")

function nombre () {
    return name.innerHTML=`${rafael.name}`
}

//habilidades tarjeta

const habilidades = rafael.habilidadesTecnicas
let tableHabilidades = document.getElementById("expertise-table")

function Skills ()
{habilidades.map(habilidad => 
{ const fila = document.createElement("tr");
    fila.className = "text-[10px] md:text-[22px] text-slate-400 font-bold";
    fila.innerHTML=
    `<td class="w-16 md:w-27">${habilidad.name}</td>
    <td>
      <div class="h-1 md:h-3 bg-slate-200 rounded-full">
        <div class="h-full bg-indigo-500 rounded-full" style="width: ${habilidad.nivel}%"></div>
      </div>
    </td>
    <td class="w-10 text-right text-texto-principal">${habilidad.nivel}%</td>`
    tableHabilidades.appendChild(fila);
}
)}

//descripcioin.
const aboutMeContent = document.getElementById("about-me")

function aboutME(){
const aboutMe=rafael.description.map(sentence=> {
    const parrafo = document.createElement("p");
    parrafo.className =" p-3 "
    parrafo.innerHTML = sentence
    aboutMeContent.appendChild(parrafo);


})}

//aboutMeContent.innerHTML = `${aboutMe}`

//grid de habilidades
const skillsImgHtml = document.getElementById("grid-skills-img-container")
const mainSkills = rafael.skills

function MainSkills(skills=mainSkills){
    mainSkills.forEach(skill=>
    {
        const imagen = document.createElement("img")
        imagen.src=skill
        imagen.alt=skill.split("/").pop().split('.')[0];
        console.log (imagen.alt=skill.split("/").pop().split('.')[0])
       imagen.className =" bg-azul-oscuro rounded w-full h-24 md:h-50 p-2 object-contain "
       skillsImgHtml.appendChild(imagen)
    }
    )
}

const otherSkHtml = document.getElementById("other-Skills")

const otherskills = rafael.additionalSkills


function otherSkills(skills=otherskills){
    otherskills.forEach(skill=>
    {
        const imagen = document.createElement("img")
        imagen.src=skill
        imagen.alt=skill.split("/").pop().split('.')[0];
        console.log (imagen.alt=skill.split("/").pop().split('.')[0])
       imagen.className =" w-10 md:w-20"
       otherSkHtml.appendChild(imagen)
    }
    )
}



export {heroIMG,nombre,Skills,aboutME,MainSkills,otherSkills}