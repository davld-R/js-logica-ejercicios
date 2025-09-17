//  Complete la función suma al cuadrado de modo que eleve al cuadrado cada número que se le pase y luego sume los resultados
// Por ejemplo, porque [1, 2, 2] deberia retornar 9 porque 1**2 + 2**2 + 2**2 = 9

function squareSum(numbers){
    let num2 = 0;
    let suma = 0;
    for (let i = 0; i < numbers.length; i++) {
        const num = numbers[i];
        num2 = num ** 2;
        suma = num2 + suma;
    }
    return suma;
}

console.log(squareSum([]))