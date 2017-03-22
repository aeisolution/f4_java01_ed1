// Utilizzo di varibili per le funzioni

// Creare una funzione quadrato 
// per elevare alla potenza del 2 il valore passato
var quadrato = function(x) {
    return x * x;
};

// Creare funzione map con passaggio di 2 parametri
// func     per la funzione richiesta (quadrato)
// list     per un array di elementi da elevare a potenza
var map = function(func,list) {
    var results = [];
    for(var i=0; i < list.length; i++){
        results.push(func(list[i]));
    }
    return results;
};


// Stampare a console il risultato di map 
console.log(map(quadrato,[2, 5, 7, 12]));
console.log(map(function(x) {return x*x;},[2, 5, 7, 12]));

