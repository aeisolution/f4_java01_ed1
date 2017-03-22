//Gestione conflitti libreria

//Libreia jQuery (demo)
var $ = (function() {
    var jQuery = {
            nome: "jQuery",
            versione: "1.0.0",
            messaggio: function() {
                console.log("benvenuto in jQuery");
            }
        }

    return jQuery;
})();

//Libreia bootstrap che usa jquery (demo)
(function(jQuery) {
    var bootsrap = {
            nome: "Bootstrap",
            versione: "1.0.0",
            messaggio: function() {
                console.log("benvenuto in boorstrap che usa " + jQuery);
            }
        }
})($);


var jQuery = {
        nome: "lib nuova",
        versione: "x.x.x",
        messaggio: function() {
            console.log("nuova libreria");
        }
    }


// Utilizzo demo jQuery
console.log(jQuery.versione);
jQuery.messaggio();