//express lib
var express = require('express');
//inspect
var util = require('util');

//instantiate express
var app = express();

//other js needed to elaborate infos
var data = require('./scripts/data.js')

//defaultVal are default values only used when index.html is called for the first time, not after sending a post req
var defaultVal={
    hiddenInfo: 'hidden',
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

app.get('/', function(req, res) 
{
	bind.toFile('tpl/index.tpl', defaultVal, 
    function(data){
        res.writeHead(200, {'Content-Type':'text/html'});
        
        res.end(data);
    });
});

app.post('/search', function(req, res) {
    var val;
    var employee = data.infos(req.body.idSearch);
    if(employee!=-1){
        val = {
            hiddenInfo: 'visible',
            id: employee[0],
            name: employee[1],
            surname: employee[2],
            level: employee[3],
            salary: employee[4]
        }
    } else val = defaultVal;
    bind.toFile('tpl/index.tpl', val, 
    function(data){
        res.writeHead(200, {'Content-Type':'text/html'});
        
        res.end(data);
    });
});

app.post('/insert', function(req, res) {
    var bool = (typeof req.body.name !== 'undefined' && req.body.name && typeof req.body.surname !== 'undefined' && req.body.surname && typeof req.body.level !== 'undefined' && req.body.level && typeof req.body.salary !== 'undefined' && req.body.salary);
    if (bool) data.add(req.body.id, req.body.name, req.body.surname, req.body.level, req.body.salary);
    bind.toFile('tpl/index.tpl', defaultVal, 
    function(data){
        res.writeHead(200, {'Content-Type':'text/html'});
        
        res.end(data);
    });
});

app.post('/delete', function(req, res) {
    data.remove(req.body.idDelete);
    bind.toFile('tpl/index.tpl', defaultVal, 
    function(data){
        res.writeHead(200, {'Content-Type':'text/html'});
    
        res.end(data);
    });
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});