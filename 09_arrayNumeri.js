// Creazione e gestione array numerici

// Creo un array di prezzi
var prezzi = [ 780.10, 265, 1000, 348.60, 399, 299.90, 100];
console.log(prezzi);


// Creare array nuovo con valori con provvigione del 10%
var prezziProv = prezzi.map(
    function(value, i) {
        return i;
    }
);
console.log(prezziProv);


// Calcolo totale dei valori in prezzi
var totale = prezzi.reduce( 
    function(prev, value, i, arr){
        return prev + value;
    }
    ,0);

//ECMAScript 6
var totale = prezzi.reduce((p, v) => p + v );

console.log('Totale: ' + totale);





function(prev, value, i, arr){
    return prev + value;
}

(p, v, i, a) => p + v;



