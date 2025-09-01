// Ejercicio-01
// Consideremos una matriz/lista de ovejas donde puede que falten algunas. Necesitamos una función que cuente el número de ovejas presentes en la matriz (verdadero significa presente).

// Por ejemplo:

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]

//   La respuesta correcta sería 17.

// Sugerencia: No olvides comprobar si hay valores incorrectos como null/undefined

let sheepArray = [true, true, true, false,
    true, true, true, true,
    true, false, true, false,
    true, false, false, true,
    true, true, true, true,
    false, false, true, true]

function countSheeps(sheep) {
    let list = [];
    for (let i = 0; i < sheep.length; i++) {
        if (sheep[i] === true) {
            list.push(sheep[i]);
        }
    }
    return list.length;
}

console.log(countSheeps(sheepArray));