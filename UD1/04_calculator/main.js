// Declarar 2 variables con número e imprimir por consola (mediante console.log()) el valor de:
// Suma
// Resta
// Multiplicación
// División


// define variables
let x, y;
let suma, resta, multiplicacion, division;
x = 2;
y = 3;
// print sum, substract, multiply and divide
function calculadora() {
    suma = x + y;
    resta = x - y;
    multiplicacion = x * y;
    division = x / y;
}
calculadora()
console.log(`suma: ${suma}
resta: ${resta}
multiplicacion: ${multiplicacion}
division: ${division}`)