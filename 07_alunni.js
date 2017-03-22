// Gestione Array

// Funzione per stampa array passato come parametro
function stampaArray(array) {
    for (var i = 0; i < array.length; i++) {
        console.log((i + 1) + '. ' + array[i]);    
    }
}

// Creare array di alunni con nominativo
var alunni = [ 'Andrea', 'Grazia', 'Sabina', 'Ninni',
               'Carmelo', 'Emiliano', 'Leonardo', 'Ignazio'];

// Stampare a video il numero di elementi in array
console.log('numero elementi: ' +  alunni.length);

// Stampare a console l'elenco di alunni uno per riga
stampaArray(alunni);

// Ordinare il contenuto dell'array (ordine alfabetico)
alunni.sort();

// Stampare a video arry ordinato
console.log('\nAlunni in ordine')
stampaArray(alunni);

// Creare un array nuovo dove inserire i soli elementi
// di alunni che iniziano con la lettera 'G'
var alunniG = alunni.filter(
    function(value){
        return value[0].toUpperCase() === 'G';
    }
);

var alunniG = alunni.filter((v) => v[0].toUpperCase() == 'G');

/*
var alunniG = [];
for(var i=0; i< alunni.length; i++) {
    if(alunni[i][0].toUpperCase() === 'G') {
        alunniG.push(alunni[i]);
    }
}
*/

//  Stampa dell'array alunniG
console.log('\nAlunni che iniziano con lettera G');
stampaArray(alunniG);


// Creare un arry filtrato di alunni con i soli elementi 
// in posizione pari dove pari è il II, IV, VI, etc..
var alunniPari = alunni.filter(
    function(value, i) {
        return i % 2 > 0;
    }
);

//  Stampa dell'array filtrato
console.log('\nAlunni in posizione pari');
stampaArray(alunniPari);
