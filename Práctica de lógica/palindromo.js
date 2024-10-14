/*
solicitar una palabra o frase y determinar si es un palíndromo
*/

console.log("3.- Palíndromo" )

let frase= prompt("Por favor ingresa una oalabra o frase:");

let fraseLimpia= frase.trim().toLowerCase().replace(/[^a-z]/g, '');

let fraseAlReves= fraseLimpia.split('').reverse().join('');

if(fraseLimpia === fraseAlReves){
    console.log(`Esta frase/palabra: "${frase}" ...es un palíndromo.`);
} else { 
    console.log(`Esta frase/palabra: "${frase}" ... no es un palíndromo.`)
}
