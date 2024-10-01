// Operadores de comparación
// 1. Comprueba si 10 es mayor o igual que 9 e imprime el resultado en consola.
function compareTenAndNine() {
    
        let a = 10;
        let b = 9;
    
        if (a >= b) {
            console.log(a + " es mayor o igual que " + b);
        } else {
            console.log(a + " no es mayor o igual que " + b);
        }
    
}
//  aquí llama a la función para ejecutar 
compareTenAndNine();
// 2. Comprueba si 0 es igual a 0 e imprime el resultado en consola.
function compareZeroAndZero() {
    let a = 0;
    let b = 0;

    if (a === b) {
        console.log(a + " es igual a " + b);
    } else {
        console.log(a + " no es igual a " + b);
    }
}
// aquí llama a la función
compareZeroAndZero();

// 3. Comprueba si 7 es mayor que 8 y menor que 10, e imprime el resultado en consola.
function compareSeven() {
    let a = 7;

    // Comprueba si 7 es mayor que 8 y menor que 10
    if (a > 8 && a < 10) {
        console.log(a + " es mayor que 8 y menor que 10");
    } else {
        console.log(a + " no es mayor que 8 y menor que 10");
    }
}

// Llama a la función
compareSeven();

// Operadores lógicos
// 4. Verifica si puedes comprar un producto de 1500 con un descuento del 25% teniendo 1150€ e imprime si puedes o no.
function canBuyProduct() {
    const precioOriginal = 1500; // Precio producto
    const descuento = 0.25; // 25% de descuento
    const dineroDisponible = 1150; // Dinero que tengo

    // acá Calcula el precio después del descuento
    const precioConDescuento = precioOriginal - (precioOriginal * descuento);

    //  Se Verifica si se puede comprar el producto
    if (dineroDisponible >= precioConDescuento) {
        console.log("Puedes comprar el producto.");
    } else {
        console.log("No puedes comprar el producto.");
    }
}

// Llama a la función
canBuyProduct();

// Variables
// 5. Crea una variable llamada `mensaje` y asígnale el valor "Hola JavaScript", luego imprime la variable en consola.
function createMessageVariable() {
    let mensaje = "Hola JavaScript"; // aquí crea la variable y le asigna el valor
    console.log(mensaje); // aca imprime el valor de la variable en consola
}

// aquí llama la función
createMessageVariable();
// 6. Crea una variable llamada `resultado` y asígnale la suma de 2 y 3, luego imprime la variable en consola.
function createSumVariable() {
    let resultado = 2 + 3; //  aqui la summa de 2 y 3
    console.log(resultado); // Imprime el valor de la variable en consola
}

// Llama a la función
createSumVariable();

// 7. Crea una constante llamada `IS_DISABLED` y asígnale el valor booleano `true`, luego imprime la constante en consola.
function createDisabledConstant() {
    const IS_DISABLED = true; // Crea la constante y le asigna el valor booleano true
    console.log(IS_DISABLED); // Imprime el valor de la constante en consola
}

// Llama a la función
createDisabledConstant();

// Null y Undefined
// 8. Crea una variable con `let` llamada `capacidad` y asígnale un valor `null`, luego imprime la variable en consola.
function createNullVariable() {
    let capacidad = null; // Crea la variable y le asigna el valor null
    console.log(capacidad); // Imprime el valor de la variable en consola
}

// Llama a la función
createNullVariable();

// 9. Crea una variable con let llamada dinero y asígnale un valor undefined, luego imprime la variable en consola.
function createUndefinedVariable() {
    let dinero; // se le asigno un valor undefined
    console.log(dinero); // Imprime la variable en consola
}
createUndefinedVariable();

// typeof
// 10. Escribe un código para ver el tipo de una variable llamada `userName` e imprime el tipo de dato en consola.
function checkUserNameType() {
    let userName = "Juan"; // Asigna un valor a la variable userName
    console.log(typeof userName); // Imprime el tipo de dato en consola
}

checkUserNameType();

// 11. Asegúrate de que `dogId` es una cadena de texto y luego imprime el tipo de dato en consola.
function checkDogIdIsString() {
    let dogId = "12345"; // Asigno un valor 

    // Verificamos si dogId es una cadena de texto
    if (typeof dogId === 'string') {
        console.log("dogId es una cadena de texto.");
    } else {
        console.log("dogId no es una cadena de texto.");
    }
    
    // Imprimimos el tipo de dato
    console.log("El tipo de dato de dogId es: " + typeof dogId);
}

// Llamamos a la función
checkDogIdIsString();


// 12. Imprime un mensaje en la consola utilizando `console.log()`.
function logMessage() {
    console.log("Hola este es un mensaje :'D");
}

// Llama a la función para que se ejecute
logMessage();
// 13. Utiliza `console.log()` para imprimir el valor de la variable `edad` que tiene el valor 30.
function logAge() {
    let edad = 30; // se define la variable 'edad'
    console.log(edad); // Imprimimos el valor de 'edad'
}

// Llamamos a la función
logAge();

function logVersion() {
    let version = 2024; // se define la variable 'version'
    console.log('La versión de JavaScript es ' + version); // Imprimimos el mensaje con el valor de 'version'
}

// Llamamos a la función
logVersion();


// Exportar todas las funciones para poder usarlas en las pruebas
module.exports = {
    compareTenAndNine,
    compareZeroAndZero,
    compareSeven,
    canBuyProduct,
    createMessageVariable,
    createSumVariable,
    createDisabledConstant,
    createNullVariable,
    createUndefinedVariable,
    checkUserNameType,
    checkDogIdIsString,
    logMessage,
    logAge,
    logVersion,
};