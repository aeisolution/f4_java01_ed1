
function updateBtnTitle() {
    var label = document.getElementById('titleButtons');
    label.innerHTML += ' - Bravooooooo!!!!';

    //label.innerHTML = label.innerHTML + ' - Bravooooooo!!!!';

}


function loadTable() {
    console.log('loadTable');
    var tb = document.getElementById('table1');
    console.log(tb);
    var tbody = tb.getElementsByTagName('tbody')[0];
    console.log(tbody);
    
    var row = document.createElement('tr');
    row.innerHTML = '<td>1</td>              \
                <td>Mark</td>           \
                <td>Otto</td>           \
                <td>@mdo</td>';

    tbody.appendChild(row); 
    console.log(tbody);
}
