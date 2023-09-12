function validateBase(matriz: any) {
    const validLetters = new Set(['A', 'T', 'C', 'G']) //Unicas letras que puede admitir

    for (let i = 0; i < matriz.length; i++) { //Recorro la matriz
        for (let j = 0; j < matriz[i].length; j++) {
            if (!validLetters.has(matriz[i][j])) {
                return false // Si una letra en la matriz no es válida, devuelve falso
            }
        }
    }
    return true // Si todas las letras son válidas, devuelve verdadero
}

export function hasMutation(matriz: any): boolean | null {
    if (!validateBase(matriz)) { // Verifico si la matriz contiene solo letras válidas
        return null // Si no contiene letras válidas, devuelvo nulo
    }

    const n = matriz.length //Tamaño de la matriz

    function verifySequence(secuencia: any) {
        return secuencia.length >= 4 && new Set(secuencia).size === 1 // Verifico si hay 4 letras seguidas iguales en una secuencia
    }

    for (let i = 0; i < n; i++) {
        const fila = matriz[i];
        const columna = matriz.map((row: any) => row[i]) // Obtengo la columna actual

        for (let j = 0; j < n - 3; j++) { // Recorro las filas y columnas en busca de secuencias de cuatro letras iguales
            if (verifySequence(fila.slice(j, j + 4)) || verifySequence(columna.slice(j, j + 4))) {
                return true  // Si encuentro una secuencia de cuatro letras iguales, devuelvo verdadero
            }
        }
    }

    for (let i = 0; i < n - 3; i++) {
        for (let j = 0; j < n - 3; j++) { // Recorro las diagonales y anti-diagonales
            const diagonal = [];
            const antidiagonal = [];

            for (let k = 0; k < 4; k++) {
                diagonal.push(matriz[i + k][j + k]);
                antidiagonal.push(matriz[i + k][j + 3 - k]);
            }

            if (verifySequence(diagonal) || verifySequence(antidiagonal)) {
                return true // Si encuentro una secuencia de cuatro letras iguales en diagonal o anti-diagonal, devuelvo verdadero
            }
        }
    }

    return false // Si no se encuentra ninguna mutación, devuelvo falso
}
