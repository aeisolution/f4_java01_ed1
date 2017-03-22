// -------------------------------
// Gestione array
// -------------------------------

// Creare un array numerico di 10 elementi
var punteggi = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 

// Stampare a console il contenuto dell'array
console.log(punteggi);

// Stampare a console il contenuto dell'array un elemento per riga
for (var i = 0; i < punteggi.length; i++) {
    console.log(punteggi[i]);
}

// Stampare a console i valori in posizione pari dell'array
// uno su ogni riga
// var punteggi = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 
// ovvero [2, 4, 6, 8, 10]

// Opzione A
for (var i = 1; i < punteggi.length; i = i + 2) {
    console.log(punteggi[i]);
}

// Opzione B
for (var i = 0; i < punteggi.length; i = i + 2) {
    console.log(punteggi[i+1]);
}
 