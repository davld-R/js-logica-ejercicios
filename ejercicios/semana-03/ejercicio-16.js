// Completa la función que acepta un parámetro de cadena e invierte cada palabra de la cadena. Se deben conservar todos los espacios.
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"


function reverseWords(str) {
    // 1. Dividir la cadena en palabras.
    // 2. Invertir cada palabra.
    // 3. Unir las palabras de nuevo.
    return str.split(' ').map(word => 
        word.split('').reverse().join('')
    ).join(' ');
}


console.log(reverseWords('This is an example!'));
// console.log(reverseWords('double  spaces'));