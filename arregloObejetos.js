//let personas =Array(1,2,3,4,5)

let personas=[
    {nombre: "mateo ", edad:22,},
    {nombre: "eliza ", edad:19},
    {nombre:"daniel " ,edad:25},
    {nombre:"lucy " ,edad:50},
    {nombre:"carlos " ,edad:35},
 
]

// //ARRAY METHODS
// //1. Filtrado 
// let filtrado=personas.filter(function(persona){
//     return (persona.edad>20)
// })

// console.log(filtrado)

// //FUNCION FLECHA 

// let filtrado=personas.filter(persona=>persona.edad<30)
// console.log(filtrado)


//2. Mapeo del arreglo 
let mapeado=personas.map(function(persona){
    return (persona.nombre+" de Medellin ")

})
console.log(mapeado)


//Flecha 
let mapeado1=personas.map(persona=>persona=>persona.nombre+ "De medellin")
    console.log(mapeado1)


//3. forEach (para cada uno de los elementos)
personas.forEach(function(persona){
    persona.nombre="nn"

})
console.log(personas)

//funcion flecha

personas.forEach(persona => persona.nombre="nn")
    console.log(persona)
