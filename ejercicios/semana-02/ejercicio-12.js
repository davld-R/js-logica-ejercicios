// Crea una función que tome un número entero como argumento y retorne "Even"para números pares o "Odd"para números impares.

function evenOrOdd(number) {
    return number % 2 == 0 ? 'Even' : 'Odd';
}

console.log(evenOrOdd(-7))