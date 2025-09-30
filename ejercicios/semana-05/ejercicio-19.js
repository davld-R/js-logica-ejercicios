// Descripción
// Necesitamos una función que pueda transformar una cadena en un número. ¿Qué maneras de lograrlo conoces?

// Nota: No te preocupes, todas las entradas serán cadenas y cada cadena es una representación perfectamente válida de un número entero.

// Ejemplos

// "1234" --> 1234
// "605"  --> 605
// "1405" --> 1405
// "-7" --> -7

const stringToNumber = function (str) {
    return parseInt(str, 10);
}

console.log(stringToNumber("-7"));