// ¿Puedes encontrar la aguja en el pajar?

// Escribe una función findNeedle()que tome un arrayconjunto de basura pero que contenga uno"needle"

// Después de que su función encuentre la aguja, debería devolver un mensaje (como una cadena) que diga:

// "found the needle at position "Además indexencontró la aguja, así que:

// Ejemplo (Entrada --> Salida)

const box = ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"];
// --> "found the needle at position 5" 

// Nota: En COBOL, debería devolver "found the needle at position 6"

// assert.notStrictEqual(findNeedle(haystack_1.slice()), undefined, "Your function didn't return anything");
// assert.strictEqual(findNeedle(haystack_1), 'found the needle at position 3');
// assert.strictEqual(findNeedle(haystack_2), 'found the needle at position 5');
// assert.strictEqual(findNeedle(haystack_3), 'found the needle at position 30');
// assert.strictEqual(findNeedle(haystack_4), 'found the needle at position 5');


function findNeedle(haystack) {
    for (let i = 0; i < haystack.length; i++){
        let palabra = haystack[i];
        if (palabra === 'needle') {
            return `found the needle at position ${i}`;
        }
    }
    return `Your function didn't return anything`;
}

console.log(findNeedle(box));