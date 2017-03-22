// Simulazione scope delle variabili

function showNome(value) {
    var nome = value;
    console.log('showNome=' + value);
}


var nome;
{
    let nome = 'Andrea';
    console.log('nome=' + nome);
}
showNome('Grazia');
console.log('nome=' + nome);

var abilitato = true;
if(abilitato) {
    var nome
    nome = 'buono';
    console.log('nome=' + nome);
} else {
    var nome = 'cattivo';
}

console.log('nome=' + nome);
