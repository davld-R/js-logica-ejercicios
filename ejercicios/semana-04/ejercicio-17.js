// El ácido desoxirribonucleico (ADN) es una sustancia química que se encuentra en el núcleo de las células y transporta las "instrucciones" para el desarrollo y funcionamiento de los organismos vivos.

// Si quieres saber más: http://en.wikipedia.org/wiki/DNA

// En las cadenas de ADN, los símbolos "A" y "T" son complementarios entre sí, como "C" y "G". Su función recibe un lado de la cadena de ADN (excepto en Haskell); debe devolver el otro lado complementario. La cadena de ADN nunca está vacía ni hay ADN en absoluto (excepto en Haskell).

// Puede encontrar ejercicios más similares aquí: http://rosalind.info/problems/list-view/ (fuente)

// Ejemplo: ( entrada --> salida )

// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"

function dnaStrand(dna) {
    const array = [];
    for (let i = 0; i < dna.length; i++) {
        if (dna[i] === 'A') {
            array.push('T');
        } else if (dna[i] === 'T') {
            array.push('A');
        } else if (dna[i] === 'C') {
            array.push('G')
        } else if (dna[i] === 'G') {
            array.push('C');
        }
    }
    return array.join("");
}

console.log(dnaStrand('GTAT'));