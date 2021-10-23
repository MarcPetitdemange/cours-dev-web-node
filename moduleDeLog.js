var error = function (log) {
    console.log("ERROR : " + log);
}

var debug = function (log) {
    console.log("DEBUG : " + log);
}

var info = function (log) {
    console.log("INFO : " + log);
}

var hagridLogger = function (log) {
    console.log("HAGRID TE DIT : " + log);
}

export {error,info,hagridLogger,debug};
