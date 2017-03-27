
function validate() {
    var valid = true,
        errors = '';
        $('#frmAlert ul').html('');
        $('input').parent().removeClass('has-error');
        

    //1. Controllo Password
    // campo obbligatorio e lunghezza > 5
    var pwd = document.forms.frmDati.password.value;
    console.log('pwd: ' +  pwd + ' len:' + pwd.length);
    if(pwd.length <= 5){
        console.log("pssword not valid");
        valid = false;
        errors += 'Password non valida\n';

        $('#frmAlert ul').append('<li>Password</li>');
        $('input[name="password"]').parent().addClass('has-error');
    }
       

    //2. Controllo EMail
    // campo obbligatorio e formato valido
    var email = document.forms.frmDati.email.value;
    var chiocciola = email.indexOf('@');
    var chiocciola2 = email.indexOf('@',chiocciola + 1);
    var punto = email.indexOf('.',chiocciola);

    console.log('email: ' +  email + ' len:' + email.length);
    console.log('@: ' + chiocciola + ' - @2:' +  chiocciola2 + '.: ' + punto);

    if( !(chiocciola>0 
            && chiocciola2==-1 
            && punto>chiocciola + 1) ) {
        console.log('Email non valida')
        valid = false;
        errors += 'Email non valida\n';

        $('#frmAlert ul').append('<li>Email</li>');
        $('input[name="email"]').parent().addClass('has-error');
    }

    console.log(errors);
    //alert(errors);
    console.log('valid: ' + valid);

    $('#frmAlert').removeClass('hidden');
    if(!valid) {
        $('#frmAlert').removeClass('alert-success')
                      .addClass('alert-warning');
    } else {
        $('#frmAlert').removeClass('alert-warning')
                      .addClass('alert-success');
        //$('#frmAlert').addClass('hidden');
    } 

    return valid;
}