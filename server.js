import express from 'express'; //Import du module express
import * as logger from './moduleDeLog.js' //Import de notre module de log syntaxe ES6

var app = express();

app.get('/',function (req, res, next) { //On gère l'url par défaut
    res.send("Merci de te présenter au choixpeau jeune sorcier !");
    logger.info("Tu t'es présenté au choixpeau ! Je suis fier de toi ! ");
});

app.get("/Griffondor", function (req, res, next) { //On gère l'url /Griffondor
    res.send("Hmm je sens du courage ! Griffondor !");
    logger.debug("Mais quel courage !");
});

app.get("/Griffondor/etudiant/:id/content", function (req, res, next) { //On peut facilement récupérer l'id ici
    res.send("Les informations de l'élève numéro : " + req.params.id + " de Griffondor");
    logger.hagridLogger("Tu cherches à afficher les informations de l'élève numéro : " + req.params.id + " Harry !");
});

app.use(function(req, res, next) { //On gère les autres cas
    let response = res.status(404);
    response.send("Tu t'es perdu dans le chemin de travers Harry !");
    logger.hagridLogger("Je ne connais pas le chemin suivant : " + req.url);
});

app.listen(9000);
