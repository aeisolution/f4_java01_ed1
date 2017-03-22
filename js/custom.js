// Script personalizzato

// Hello
function hello() {
    document.write('hello world');
}

// Aggiorna subtitle
function aggiorna() {
    // intercettare elemento subtitle
    var subtitle = document.getElementById('subtitle');
    // aggiornare contenuto
    subtitle.innerHTML = 'Questo &egrave; il &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;            nuovo sottotitolo';
}