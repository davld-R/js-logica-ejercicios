// Bienvenidos. En este kata, se les pide elevar al cuadrado cada dígito de un número y concatenarlos.

// Por ejemplo, si ejecutamos 9119 a través de la función, saldrá 811181, porque 9 2 es 81 y 1 2 es 1. (81-1-1-81)

// Ejemplo n.° 2: Una entrada de 765 devolverá/debería devolver 493625 porque 7 2 es 49, 6 2 es 36 y 5 2 es 25. (49-36-25)

// Nota: La función acepta un número entero y devuelve un número entero.

// ¡Feliz codificación!

function squareDigits(num) {
    let text = num.toString();
    let array = [];
    for (let i = 0; i < text.length; i++) {
        array.push(text[i] ** 2) ;
    }
    let count = Number(array.join(""));
    return count;
}

console.log(squareDigits(765));