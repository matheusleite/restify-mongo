const restify = require('restify');
const server = restify.createServer();

server.get('/', (request, response) => {
    response.send({
        mensagem:"Oi Sorteio Fenae"
    });
})

server.post('/create', (request, response) => {
    //
})

server.listen(3000, () => {
    console.log("Server running");
})