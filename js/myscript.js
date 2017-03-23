// Definizione array alunni
var alunni = [
    {id: 1, nome: 'Carmelo', cognome: 'Campanella', username: 'c.campanella'},
    {id: 2, nome: 'Leonardo', cognome: 'Licata', username: 'l.licata'},
    {id: 3, nome: 'Emiliano', cognome: 'Crivello', username: 'e.crivello'},
    {id: 4, nome: 'Ignazio', cognome: 'Blando', username: 'i.blando'},
    {id: 5, nome: 'Grazia', cognome: 'Militello', username: 'g.militello'},
    {id: 6, nome: 'Sabina', cognome: 'Segreto', username: 's.segreto'},
    {id: 7, nome: 'Ninni', cognome: 'Parrivecchio', username: 'n.parrivecchio'}
];


function updateBtnTitle() {
    var label = document.getElementById('titleButtons');
    label.innerHTML += ' - Bravooooooo!!!!';
}

function loadTable(alunni) {
    var tb = document.getElementById('table1');
    var tbody = tb.getElementsByTagName('tbody')[0];
    tbody.innerHTML = '';  

    for (var i=0; i<alunni.length; i++) {
        var row = document.createElement('tr');
        row.innerHTML = '<td>' + alunni[i].id + '</td>';
        row.innerHTML += '<td>' + alunni[i].nome + '</td>';
        row.innerHTML += '<td>' + alunni[i].cognome + '</td>';
        row.innerHTML += '<td>' + alunni[i].username + '</td>';

        tbody.appendChild(row); 
    }
}

function ordina(field) {
    //1. Ordinare Array
    alunni.sort(function(_a, _b){
        var a = _a[field];
        var b = _b[field];

        if(typeof(a)== 'string' && typeof(b)== 'string' ) {
            a = a.toLowerCase();
            b = b.toLowerCase();
        }
        
        if(a == b) return 0;
        if(a < b) return -1;
        if(a > b) return 1;
    });

    //2. Svuota e Carica Array Ordinato
    loadTable(alunni);

}

function filterTable() {
    var filter = document.forms.frmFiltro.cognome.value;

    var alunniFilter = alunni.filter(function(v){
        return filter == v.cognome.substr(0,filter.length);
    });

    loadTable(alunniFilter);
}