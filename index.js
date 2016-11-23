//express lib
var express = require('express');
//inspect
var util = require('util');

//instantiate express
var app = express();

//other js needed to elaborate infos
var data = require('scripts/data.js')

//defaultVal are default values only used when index.html is called for the first time, not after sending a post req
var defaultVal={
    hiddenFull: 'hidden',
    id: '',
    name: '',
    surname: '',
    level: '',
    salary: ''
}

var bind = require('bind');

//POST
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
//JSON post
app.use(bodyParser.json());

app.get('/scripts.js', function (req, res) {
    res.sendFile('scripts/scripts.js', {root:__dirname});
});

app.set('port', (process.env.PORT || 1337));

app.get('/', function(request, response) 
{
	bind.toFile('tpl/index.tpl', defaultVal, 
    function(data){
        //data contiene la pagina html dopo che sono stati risolti i bind ^
        //html head (type of the page)
        //codice di risposta 200 Htlm (OK) 
        //e mando una risposta di tipo text/html
        response.writeHead(200, {'Content-Type':'text/html'});
    
        //html content
        //contenuto della pagina html da inviare, contenuto in data
        response.end(data);
    });
});

app.post('/search', function(req, res) {
    bind.toFile('tpl/index.tpl', defaultVal, 
    function(data){
        //data contiene la pagina html dopo che sono stati risolti i bind ^
        //html head (type of the page)
        //codice di risposta 200 Htlm (OK) 
        //e mando una risposta di tipo text/html
        response.writeHead(200, {'Content-Type':'text/html'});
    
        //html content
        //contenuto della pagina html da inviare, contenuto in data
        response.end(data);
    });
});

app.post('/insert', function(req, res) {
    var bool = (typeof request.body.name !== 'undefined' && request.body.name && typeof request.body.surname !== 'undefined' && request.body.surname && typeof request.body.level !== 'undefined' && request.body.level && typeof request.body.salary !== 'undefined' && request.body.salary);
    if (bool) data.add(req.body.id, req.body.name, req.body.surname, req.body.level, req.body.salary);
    bind.toFile('tpl/index.tpl', defaultVal, 
    function(data){
        //data contiene la pagina html dopo che sono stati risolti i bind ^
        //html head (type of the page)
        //codice di risposta 200 Htlm (OK) 
        //e mando una risposta di tipo text/html
        response.writeHead(200, {'Content-Type':'text/html'});
    
        //html content
        //contenuto della pagina html da inviare, contenuto in data
        response.end(data);
    });
});

app.post('/delete', function(req, res) {
    bind.toFile('tpl/index.tpl', defaultVal, 
    function(data){
        //data contiene la pagina html dopo che sono stati risolti i bind ^
        //html head (type of the page)
        //codice di risposta 200 Htlm (OK) 
        //e mando una risposta di tipo text/html
        response.writeHead(200, {'Content-Type':'text/html'});
    
        //html content
        //contenuto della pagina html da inviare, contenuto in data
        response.end(data);
    });
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});