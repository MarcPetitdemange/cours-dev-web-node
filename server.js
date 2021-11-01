import express from 'express'; //Import du module express
import * as logger from './moduleDeLog.js'
import * as path from "path";

var app = express();
const __dirname = path.resolve(); //On récupère le répo
app.use(express.static(__dirname + '/public')); //On expose notre fichier de ressources

app.get('/',function (req, res, next) {
    res.send("Merci de te présenter au choixpeau jeune sorcier !");
    logger.info("Tu t'es présenté au choixpeau ! Je suis fier de toi ! ");
});

app.get("/Poudlard", function (req, res, next) {
    res.sendFile(path.join( __dirname + "/vueDePoudlard.html"));
});

app.get("/Griffondor", function (req, res, next) {
    res.send("Hmm je sens du courage ! Griffondor !");
    logger.debug("Mais quel courage !");
});

app.get("/Griffondor/etudiant/:id/content", function (req, res, next) {
    res.send("Les informations de l'élève numéro : " + req.params.id + " de Griffondor");
    logger.hagridLogger("Tu cherches à afficher les informations de l'élève numéro : " + req.params.id + " Harry !");
});

app.use(function(req, res, next) {
    let response = res.status(404);
    response.send("Tu t'es perdu dans le chemin de travers Harry !");
    logger.hagridLogger("Je ne connais pas le chemin suivant : " + req.url);
});

app.listen(9000);
