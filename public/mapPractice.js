// Objeto

const actors = [
    {
        id:1,
        name:"Once",
        age:22,
        realName:"Millie Brown"
    },
    {
        id:2,
        name:"Mike",
        age:23,
        realName:"Finn Wolfhard"
    },
    {
        id:3,
        name:"Dustin",
        age:24,
        realName:"Gaten Matarazzo"
    },
]

//cual será su edad en 5 años
const futureYears = 5


//Declarar contenedor de map, hace copia de arreglo original:

const newActors = actors.map(
    actor => {
        return {...actor,age:actor.age+futureYears}
    }
)

//Original
console.log(`Lista original:\n ${actors}`)
//Mapped
console.log(`Lista con map:\n ${newActors}`)

