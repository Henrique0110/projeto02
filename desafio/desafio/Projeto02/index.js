// Importar a biblioteca que use o protocolo http e URL
const http = require('http');
const url  = require('url');
const fs   = require('fs');

function readFile(response, file) {
    fs.readFile(file, function(err, data) {
        response.end(data);
    });
}

// Criar uma função para trabalhar no servidor
var callback = function (request, response) {
    var parts = url.parse(request.url);
    var path  = parts.path;
    
    if (parts.path == "/"){
        response.writeHead(200, {"Content-type": "text/html"});
        readFile(response, "index.html");
    } else if (parts.path == "/arquivo.pdf"){
        response.writeHead(200, {"Content-type": "application/pdf"});
        readFile(response, "arquivo1.pdf");
    } else if (parts.path == "/arquivo.json"){
        response.writeHead(200, {"Content-type": "application/json"});
        readFile(response, "arquivo2.json");
    } else if (parts.path == "/arquivo.png"){
        response.writeHead(200, {"Content-type": "image/png"});
        readFile(response, "arquivo3.png");
    } else if (parts.path == "/arquivo.zip"){
        response.writeHead(200, {"Content-type": "application/zip"});
        readFile(response, "arquivo4.zip");
    } else if (parts.path == "/geradores"){
        response.writeHead(200, {"Content-type": "text/html"});
        readFile(response, "Geradores.html");
    } else if (parts.path == "/unicSul"){
        response.writeHead(200, {"Content-type": "text/html"});
        readFile(response, "SiteUnicsul.html");
    } else {
        response.writeHead(200, {"Content-type": "text/html"});
        readFile(response, "404.html");
    }
};

// Criar o servidor ------------------------------------------------------------
var server = http.createServer(callback)
server.listen(3000);
console.log("[SERVER - OK] ... Servidor montado em http://localhost:3000");