// script per validazione dati mediante regex

function validate() {
    //Verifica campi obbligatori
    var valid = true;
    $('form .form-group').removeClass('has-error');
    
    var frm = document.forms.anagForm; 
    if(frm.cognome.value.length == 0) {
        valid = false;
        $('input[name="cognome"]')
            .parent()
            .addClass('has-error');
    }

    if(frm.nome.value.length == 0) {
        valid = false;
        $('input[name="nome"]')
            .parent()
            .addClass('has-error');
    }

    var regPiva = /^\d{11}$/ ;
    if(frm.partitaIva.value.length != 11 ||
        !regPiva.test(frm.partitaIva.value)) {
        valid = false;
        $('input[name="partitaIva"]')
            .parent()
            .addClass('has-error');
    }
    
    var regCodFisc = /^\D{6}\d\d\D\d\d\D\d{3}\D$/
    if(frm.codiceFiscale.value.length != 16 ||
        !regCodFisc.test(frm.codiceFiscale.value)) {
        valid = false;
        $('input[name="codiceFiscale"]')
            .parent()
            .addClass('has-error');
    }
    
    createAlert(valid);
}

function createAlert(success) {
    var divAlert = '<div class="alert alert-dismissible" role="alert"> \
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close"> \
                            <span aria-hidden="true">&times;</span> \
                        </button> \
                    </div>';

    $('#msgValidate').html(divAlert);

    if(success) {
        $('#msgValidate .alert')
            .addClass('alert-success')
            .append('Validazione superata');
        //$('#msgValidate .alert > span').html('Validazione superata');
    } else {
        $('#msgValidate .alert')
            .addClass('alert-danger')
            .append('ERRORE di Validazione');
        //$('#msgValidate .alert > span').html('ERRORE di Validazione');
    }
}