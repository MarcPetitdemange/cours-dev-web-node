var http = require('http'); //On inclut le module http
var logger = require('./moduleDeLog.js'); //On inclut notre module perso !

var server = http.createServer(function (request, response) {

    let page = request.url;
    console.log(page);
    logger.hagridLogger(page) //Hagrid va nous dire sur quelle page on se trouve ! On utilise notre hagridLogger écrit précédemment

    response.writeHead(200, {"Content-Type" : "text/plain; charset=utf-8"});

    if(page === "/"){
        response.write("Merci de te présenter au choixpeau jeune sorcier !");
        logger.info("Tu t'es présenté au choixpeau ! Je suis fier de toi ! "); //On utilise notre info logger écrit précédemment
    }
    else if(page === "/Griffondor"){
        response.write("Hmm je sens du courage ! Griffondor !");
        logger.debug("Mais quel courage !"); //On utilise notre debug logger écrit précédemment
    }else if(page === "/Griffondor/etudiant/1/content"){
        response.write("Les informations du premier élève de Griffondor");
        logger.error("C'est très formel tout ça !"); //On utilise notre error logger écrit précédemment
    } else{
        response.write("Tu t'es perdu dans le chemin de travers Harry !");
        logger.hagridLogger(page) //Tu t'es perdu Harry ! On réutilise notre hagridLogger !
    }
    response.end();
});
server.listen(9000); //Le serveur écoute sur le port 9000
