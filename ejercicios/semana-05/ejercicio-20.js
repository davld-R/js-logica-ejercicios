// Crea una función que devuelva la suma de los dos números positivos más bajos, dado un array de al menos 4 enteros positivos. No se pasarán números de punto flotante ni enteros no positivos.

// Por ejemplo, cuando se pasa una matriz como [19, 5, 42, 2, 77], la salida debe ser 7.

// [10, 343445353, 3453445, 3453545353453]Debería regresar 3453455.


function sumTwoSmallestNumbers(numbers) {
    const sortedNumbers = numbers.sort((a, b) => a - b);
    return sortedNumbers[0] + sortedNumbers[1];
}

console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]))