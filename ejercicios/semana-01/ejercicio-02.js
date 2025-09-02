// Ejercicio 2
// Implementa una función que convierte el valor booleano dado en su representación de cadena.

// Nota: Sólo se proporcionarán entradas válidas.

// Esto se deberá validar
// Test.assertEquals(booleanToString(true), "true", 'When we pass in true, we want the string "true" as output');
// Test.assertEquals(booleanToString(false), "false", 'When we pass in false, we want the string "false" as output');

function booleanToString(b){
    if (b === true) return 'true';
    if (b === false) return 'false';
}

console.log(booleanToString(false));


