import names from 'starwars-names';
import randomColor from 'randomcolor';

var randomName = names.random();
var color = randomColor();  

console.log("Moje ime je: " + randomName);
console.log("Moja omiljena boja je: " + color);