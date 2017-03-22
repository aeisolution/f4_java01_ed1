//11 - Oggetti creati con funzione

function Alunno(nome, cognome, matricola){   
    var self = this;

    var valido = false;

    this.nome = nome;
    this.cognome = cognome;
    //this.nominativo = nome + ' ' + cognome;
    this.matricola = matricola;

    
    this.nominativo = function() {
        return self.nome + " " + self.cognome;
    }
    

    this.check = function() {
        return valido;
    }
}

var alunno1 = new Alunno('Andrea', 'Maddalena', 'A123');
alunno1.nome = 'Filippo';

console.log('nominativo: ' + alunno1.nominativo());
console.log('valido: ' + alunno1.check());


/*
var alunno2 = new Alunno('Pippo', 'NonSo', 'B234');

console.log('1. istanza alunno1');
console.dir(alunno1);

// Creare array alunni con oggetti di tipo alunno
// per i presenti in classe
var alunni = [];
alunni.push(new Alunno('Grazia', 'Militello', 'A1'));
alunni.push(new Alunno('Sabina', 'Segreto', 'A2'));
alunni.push(new Alunno('Ninni', 'Prrivecchio', 'A3'));
alunni.push(new Alunno('Carmelo', 'Campanella', 'A4'));
alunni.push(new Alunno('Emiliano', 'Crivello', 'A5'));
alunni.push(new Alunno('Leonardo', 'Licata', 'A6'));
alunni.push(new Alunno('Ignazio', 'Blando', 'A7'));

// Stampa array
console.dir(alunni);

//Stampa array con ciclo for
for(var i = 0, len = alunni.length; i < len; i++) {
    for(var prop in alunni[i]) {
        console.log(prop + ': ' + alunni[i][prop]);
    }
    console.log('------------------------');
}


// Ordinamento alfabetico crescente per cognome
// e stampa array ordinato
alunni.sort(function(elemA, elemB){
    if(elemA.cognome == elemB.cognome)
        return 0;
    else if(elemA.cognome < elemB.cognome)
        return -1;
    else
        return 1;
});
console.dir(alunni);
*/