const restify = require('restify');
const server = restify.createServer();
const mongoose = require('mongoose');

server.use(restify.plugins.bodyParser({mapParams: true}));

server.get('/', (request, response) => {
    response.send({
        mensagem:"Oi Sorteio Fenae"
    });
})

server.get('/users', (request, response) => {
    response.send({
        mensagem:"Oi Sorteio Fenae"
    });
})

server.get('/export', (request, response) => {
    response.send({
        mensagem:"Oi Sorteio Fenae"
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

server.listen(3000, () => {
    console.log("Server running");
})

mongoose.connect('mongodb://root:ydUB4msK@ds251849.mlab.com:51849/heroku_wnzklj0z');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('DB connected successfully');
});

var userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
      },
    email:{
        type: String,
        required: true
      },
    document: {
        type: String,
        required: true
      },
});

var User = mongoose.model('User', userSchema);

var me = new User({ 
        name: 'Matheus Leite',
        email: 'matheusleite@email.com',
        document: '05176984121'
     });

console.log(me.name);