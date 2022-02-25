//Funcion Tradicional 

//FUNCION - CALCULAR DISTANCIA 




// function calcularDistancia (x1,y1,x2,y2){

//     let total = Math.sqrt(Math.pow((x2 - x1), 2 )+ Math.pow(y2 - y1), 2) ;

//     return total;

// }



//funcion flecha 

let calcularDistancia = (x1,y1,x2,y2) =>  Math.sqrt(Math.pow(x2 - x1), 2 )+ Math.pow((y2 - y1), 2));

    

let final = calcularDistancia(0,0-10,-10);
console.log(`La distancia es: ${final.toFixed(2)}`); 


