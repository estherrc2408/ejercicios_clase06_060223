/*comparacion*/

var n = 9;
var n2 = 9;
console.log('comparamos con igualdades normales (comparan solo el valor)');
console.log(n == n2); // Devuelve true porque son iguales los contenidos de las variables
var n3 = 109;
console.log(n == n3); // Devuelve false porque no son iguales los contenidos de las variables
var n4 = '9';
console.log(n == n4);// Devuelve true porque son iguales los contenidos de las variables aunque no los tipos
var n5 = 9.0;
console.log(n == n5);// Devuelve true porque son iguales los contenidos de las variables aunque no los tipos
console.log('ahora comparamos con igualdades estrictas (comparan valor y tipo)');
var n = 9;
var n2 = 9;
console.log(n === n2); // Devuelve true porque son iguales los contenidos de las variables y los tipos
var n3 = 109;
console.log(n === n3); // Devuelve false porque no son iguales los contenidos de las variables
var n4 = '9';
console.log(n === n4);// Devuelve false porque son iguales los contenidos de las variables aunque no los tipos
var n5 = 9.0;
console.log(n === n5);// Devuelve true porque son iguales los contenidos de las variables y los tipos
console.log('comparador de desigualdad normales (comparan solo el valor)');
var n = 9;
var n2 = 9;
console.log(n != n2); // Devuelve false porque son iguales los contenidos de las variables
var n3 = 109;
console.log(n != n3); // Devuelve true porque no son iguales los contenidos de las variables
var n4 = '9';
console.log(n != n4);// Devuelve false porque son iguales los contenidos de las variables aunque no los tipos
var n5 = 9.0;
console.log(n != n5);// Devuelve false porque son iguales los contenidos de las variables aunque no los tipos
console.log('comparador de desigualdad estricta (comparan valor y tipo)');    
var n = 9;
var n2 = 9;
console.log(n !== n2); // Devuelve false porque son iguales los contenidos de las variables y los tipos
var n3 = 109;
console.log(n !== n3); // Devuelve true porque no son iguales los contenidos de las variables
var n4 = '9';
console.log(n !== n4);// Devuelve true porque no son iguales los tipos de las variables
var n5 = 9.0;
console.log(n !== n5);// Devuelve false porque son iguales los contenidos de las variables y los tipos
console.log('comparador mayor y menor que');
var a = 9;
var b = 8;
console.log(a>b); //Devuelve true porque a es mayor que b
var c = 9;
console.log(a>=c); //Devuelve true porque a es igual que c

const cadena = "Hola";
const cadena2 = "Adios";
console.log('cuando tenemos variables string, qué pasa con el mayor y menor qué ? si tenemos la var '+cadena+' y la var '+cadena2);
console.log(cadena > cadena2); //Devuleve true porque "Hola" es mayor alfabéticamente hablando
console.log(cadena < cadena2);
