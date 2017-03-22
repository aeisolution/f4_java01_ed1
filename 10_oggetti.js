//10 - Oggetti

var alunno = {
    nome: 'Andrea',
    cognome: 'Maddalena'
};

//1. visualizza oggetto
console.log('1. ');
console.dir(alunno);

//2. accedere alla proprieà nome
console.log('2. ');
console.log(alunno.nome);

//3. accedere alla proprieà matricola
console.log('3. ');
console.log(alunno.matricola);
alunno.matricola = 'A123';
console.log(alunno.matricola);
console.dir(alunno);

//4. navigare oggetto non conosciuto
console.log('4. ');
for(var prop in alunno){
    console.log(prop + ': ' + alunno[prop]);
}

//5. controllo proprietà
console.log('5. ');
if(!alunno.hasOwnProperty('iscrizione')) {
    console.log('iscrizione NON presente');    
} 

