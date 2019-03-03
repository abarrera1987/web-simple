const http = require("http");


http.createServer((req, res) => {

        res.writeHead(200, { 'Contente-Type': 'application/json' });

        let usuario = {

            nombre: 'Alexander',
            apellido: 'Escobar',
            edad: 31,
            url: req.url

        }

        res.write(JSON.stringify(usuario));
        res.end();

    })
    .listen(8080);

console.log("Escuchando el puerto 8080");