import express from 'express';
import * as logger from './moduleDeLog.js'
import * as path from "path";
import mongoose from "mongoose"; //Import de mongoose
import {User} from "./user.js"; //Import de notre modèle pour l'utilisateur
mongoose.set("strictQuery", false);
var app = express();
const __dirname = path.resolve();
app.use(express.static(__dirname + '/public'));

const connection = mongoose.connect('mongodb://admin:root@localhost:27017/Users?authSource=admin').then(() => { //Connection à la base de données
    console.log("Connecté à la base de données"); //On retourne un message si on est bien connecté
});

app.get("/usersDeBeaubatons", function (req, res, next) {
    logger.info("On va retourner tous les utilisateurs de Beaubâtons !");
    User.find({}, (err,users) => {
        return res.send(JSON.stringify(users));
    });
});


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
