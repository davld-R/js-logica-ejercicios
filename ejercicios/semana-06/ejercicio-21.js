// El museo de las cosas increíblemente aburridas
// El museo de objetos increíblemente aburridos quiere deshacerse de algunas exhibiciones. Miriam, la arquitecta de interiores, idea un plan para eliminar las exhibiciones más aburridas. Les da una calificación y luego retira la que tiene la calificación más baja.

// Sin embargo, justo cuando terminó de calificar todas las exhibiciones, se dirige a una feria importante, así que te pide que escribas un programa que le indique las calificaciones de las exhibiciones después de eliminar la más baja. Me parece justo.

// Tarea
// Dado un array de enteros, elimine el valor más pequeño. No modifique el array/lista original. Si hay varios elementos con el mismo valor, elimine el que tenga el índice más bajo. Si obtiene un array/lista vacío, devuelva un array/lista vacío.

// No cambie el orden de los elementos que quedan.

// Ejemplos

// * Input: [1,2,3,4,5], output = [2,3,4,5]
// * Input: [5,3,2,1,4], output = [5,3,2,4]
// * Input: [2,2,1,2,1], output = [2,2,2,1]

function removeSmallest(numbers) {
    if (numbers.length === 0) {
        return [];
    }

    const smallestValue = Math.min(...numbers);
    const indexOfSmallest = numbers.indexOf(smallestValue);

    return numbers.filter((_, index) => index !== indexOfSmallest);
}

// console.log("Caso 1: [1,2,3,4,5] ->", removeSmallest([1,2,3,4,5]));
// console.log("Caso 2: [5,3,2,1,4] ->", removeSmallest([5,3,2,1,4]));
// console.log("Caso 3: [2,2,1,2,1] ->", removeSmallest([2,2,1,2,1]));