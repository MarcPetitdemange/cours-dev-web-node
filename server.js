var http = require('http') //On inclut le module http
var server = http.createServer(function (request, response) {
    response.writeHead(200); //Dans la réponse du serveur on met le code 200 (En gros "tout va bien")
    response.end("Un Lannister paye toujours ses dettes !"); //On retourne du texte ma foi très pertinent
});
server.listen(9000); //Le serveur écoute sur le port 9000



