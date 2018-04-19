const restify = require('restify');
const server = restify.createServer();
const app = require('./app');
const User = require('./user');
var json2csv = require('json2csv');

var fields = ['name', 'email', 'document'];
var fieldNames = ['Name', 'Email', 'Document'];

server.use(restify.plugins.bodyParser({mapParams: true}));

server.get('/', (request, response) => {
    response.send({
        mensagem:"Oi Sorteio Fenae"
    });
})

server.get('/users', (request, response) => {
    
    User.find({}, function (err, users) {
        response.send(users);
    });
})

server.get('/export', (request, response) => {
    
    User.find({}, function (err, users) {
        var data = json2csv.parse({ data: users, fields: fields, fieldNames: fieldNames });
        response.header('content-type', 'csv');
        // response.attachment('filename.csv');
        response.send(200, data);
    });
})

server.post('/create', (request, response) => {
    //
    console.log(request.body.name);

    var me = new User({ 
        name: request.body.name,
        email: request.body.email,
        document: request.body.document
    });

    me.save();

    response.send(200);
})

server.listen(process.env.PORT || 3000, () => {
    console.log("Server running");
})