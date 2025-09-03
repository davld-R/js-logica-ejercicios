// Escriba una función que calcule el promedio de los números en una matriz dada.

// Nota: Las matrices vacías deben devolver 0.

// const tester = ([1, 1, 1], 1); el resultado debe ser 1
// tester([1, 2, 3], 2); el resultado debe ser 2
// tester([1, 2, 3, 4], 2.5); el resultado debe ser 2.5

let tester = [1, 2, 3, 4];
function findAverage(array) {
    if (array.length === 0) return;
    let suma = 0;
    for (let i = 0; i < array.length; i++) {
        let v2 = suma;
        suma = array[i] + v2;
    }
    return suma / array.length;
}

// Array reduce
// function findAverage(array) {
//     return array.length > 0 ? array.reduce((acumulador, valorActual) => acumulador + valorActual) / array.length : 0;
// }

console.log(findAverage(tester));


