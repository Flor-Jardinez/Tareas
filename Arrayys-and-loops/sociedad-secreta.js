/* Instrucciones 
Devolver una cadena que contenga las primeras letras de cada nombre en el mismo orden que aparecen
*/

console.log("2.- La Sociedad Secreta");
const miembros= ["Esperanza", "Franco", "Nia"];
const miembros2=['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel'];
const miembros3= ['Harry', 'Ron', 'Hermione'];

function secretName(miembros){
const inicial= miembros.map(miembros => miembros[0]);
const secretName= inicial.join(``);
return secretName;
}

console.log(secretName(miembros));

console.log(secretName(miembros2));

console.log(secretName(miembros3));