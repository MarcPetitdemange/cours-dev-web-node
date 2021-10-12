var http = require('http') //On inclut le module http
var server = http.createServer(function (request, response) {

    let page = request.url; //On récupère l'url demandée dans la requête
    console.log(page); //C'est juste pour afficher l'url dans la console

    //On indique qu'on va répondre un code 200 (en gros tout est OK) et que la réponse va contenir du texte + La réponse est en utf8 pour gérer les accents
    response.writeHead(200, {"Content-Type" : "text/plain; charset=utf-8"});

    if(page === "/"){ //On gère la page par défaut ==> localhost:9000/
        response.write("Merci de te présenter au choixpeau jeune sorcier !");
    }
    else if(page === "/Griffondor"){ // ==> localhost:9000/Griffondor
        response.write("Hmm je sens du courage ! Griffondor !");
    }else if(page === "/Griffondor/etudiant/1/content"){ //==> localhost:9000/Griffondor/etudiant/1/content
        response.write("Les informations du premier élève de Griffondor");
    } else{ //On gère le cas où la page n'a pas pu être trouvée
        response.write("Tu t'es perdu dans le chemin de travers Harry !");
    }
    response.end();
});
server.listen(9000); //Le serveur écoute sur le port 9000



