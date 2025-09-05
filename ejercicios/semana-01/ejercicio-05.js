// El reloj muestra horas, minutos y segundos después de la medianoche.

// Su tarea es escribir una función que devuelva el tiempo desde la medianoche en milisegundos.

// Ejemplo:
// h = 0
// m = 1
// s = 1
// 1 hora 60 minutos
// 1 minuto  60 segundos
// 2 minuto  120 segundos
// 1 segundo 1000 milisegundos

// result = 61000
// Restricciones de entrada:

// 0 <= h <= 23
// 0 <= m <= 59
// 0 <= s <= 59

// Tests
// assert.strictEqual(past(0, 1, 1), 61000)
// assert.strictEqual(past(1, 1, 1), 3661000)
// assert.strictEqual(past(0, 0, 0), 0)
// assert.strictEqual(past(1, 0, 1), 3601000)
// assert.strictEqual(past(1, 0, 0), 3600000)

function past(h, m, s) {
    if (h === 0 && m === 0 && s === 0) return 0;
    h > 0 && h <= 23 ? h = ((h * 60) * 60) * 1000 : h = 0;
    m > 0 && m <= 59 ? m = (m * 60) * 1000 : m = 0;
    s > 0 && s <= 59 ? s = s * 1000 : s = 0;
    return h + m + s;
}



console.log(past(1, 0, 1));
