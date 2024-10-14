/* 
Instrucciones:
Calcular la suma de reistencias conectadas en serie
*/

console.log(" 1.- Suma de reistencias");
console.log("Resultados:");

const resistencias=[-1 , 5, 6, 3];
const resistencias2= [14,3.5,6];
const resistencias3=[8,15,100];

function sumResistencias (resistencias) {
    const total= resistencias.map(resistencias => Math.abs(resistencias))
    .reduce((sum, resistencias) => sum + resistencias, 0);
    return `${total} ohms`;
}

console.log(sumResistencias(resistencias));

console.log(sumResistencias(resistencias2));

console.log(sumResistencias(resistencias3));