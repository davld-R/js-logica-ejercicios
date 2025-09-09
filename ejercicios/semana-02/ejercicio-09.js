// Complete el método que toma un valor booleano y devuelve una "Yes"cadena para true, o una "No"cadena para false.

function boolToWord( bool ){
    return bool === true ? 'Yes' : 'No';
}

console.log(boolToWord(false))