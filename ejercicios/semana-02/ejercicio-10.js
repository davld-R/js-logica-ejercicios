// Crea una función con dos argumentos que devolverá una matriz de los primeros nmúltiplos de x.

// Suponga que tanto el número dado como el número de veces a contar serán números positivos mayores que 0.

// Devuelve los resultados como una matriz o lista (dependiendo del idioma).

// Ejemplos
// x = 1, n = 10 --> [1,2,3,4,5,6,7,8,9,10]
// x = 2, n = 5  --> [2,4,6,8,10]

function countBy(x, n) {
    let z = [];
    let s = 0;
    for (let i = 1; i <= n; i++) {
        s = x + s;
        z.push(s);
    }
    return z;
}

console.log(countBy(1, 10))