// Crea una función que responda a la pregunta "¿Tocas el banjo?".
// Si tu nombre empieza con la letra "R" o "r" minúscula, ¡tocas el banjo!

// La función toma un nombre como único argumento y devuelve una de las siguientes cadenas:

// name + " plays banjo" 
// name + " does not play banjo"
// Los nombres dados son siempre cadenas válidas.

// assert.strictEqual(areYouPlayingBanjo("Adam"), "Adam does not play banjo");
// assert.strictEqual(areYouPlayingBanjo("Paul"), "Paul does not play banjo");
// assert.strictEqual(areYouPlayingBanjo("Ringo"), "Ringo plays banjo");
// assert.strictEqual(areYouPlayingBanjo("bravo"), "bravo does not play banjo");
// assert.strictEqual(areYouPlayingBanjo("rolf"), "rolf plays banjo");

function areYouPlayingBanjo(name) { 
  return (name[0] === 'R') || (name[0] === 'r') ? `${name} plays banjo` : `${name} does not play banjo`;
}

console.log(areYouPlayingBanjo('Rolf'));