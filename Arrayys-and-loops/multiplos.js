/*
Instrucciones:
crear una función con dos parámetros: un número y la logitud que devuelva un array de sus multiplos
*/
console.log("3.- Multiplos");

const numero= 2;
const longitud=10;

const numero2=17;
const longitud2=6;


function arrayMultiplo (numero, longitud){
    const multiplos=[];
    
    for(let i=1; i <= longitud; i++){
    multiplos.push  ( numero*i);
    }

    return multiplos;
}

console.log(arrayMultiplo(numero, longitud));

console.log(arrayMultiplo(numero2, longitud2));