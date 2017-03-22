// Creazione e gestione array numerici

// Creo un array di prezzi
var prezzi = [ 780.10, 265, 1000, 348.60, 399, 299.90, 100];
console.log(prezzi);

var prezzi2 = [];
// Clona contenuto di prezzi in prezzi2
for(var i=0; i < prezzi.length;i++) {
    prezzi2.push(prezzi[i]);
}

prezzi.push(620);


console.log(prezzi);
console.log(prezzi2);


