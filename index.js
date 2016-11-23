//express lib
var express = require('express');
//inspect
var util = require('util');

//instantiate express
var app = express();

//other js needed to elaborate infos
//var elab = require('elab.js')

//export.funzione = funzionenome;


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

//use: for both POST and GET
app.get('/', function(request, response) 
{
    //set the headers of the responce
    var headers = {};
    headers["Access-Control-Allow-Origin"] = "*"; //for cross enviroment request
    headers["Access-Control-Allow-Methods"] = "POST, GET, PUT, DELETE, OPTIONS";//methods allowed to responce
    headers["Access-Control-Allow-Credentials"] = false;
    headers["Access-Control-Max-Age"] = '86400'; // 24 hours
    headers["Access-Control-Allow-Headers"] = "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept"; //type of headers
    //answer
    headers["Content-Type"] = "application/json";//format response
    response.writeHead(200, headers);

	var text = '';

	if ( typeof request.body !== 'undefined' && request.body)
	{
        //the content of the POST receiced
		text = "request.body: " + util.inspect(request.body) + "\n";
		
        //content of the post
		var id;
		
		//if query is defined and not null
		if ( typeof request.body.id !== 'undefined' && request.body.id)
            //save content of username
			username = request.body.id;
		else 
			username = "not defined";
			    	
        text = text + "post received: " + username;
	}
	else
	{
		text = "body undefined";
	}

    console.log(text);
    
    //answer a JSON file
	var otherArray = ["item1", "item2"];
	var otherObject = { item1: "item1val", item2: "item2val" };
    
	var json = JSON.stringify({ 
    	anObject: otherObject, 
	    anArray: otherArray, 
    	another: "item"
	});
    
    //send JSON
    response.end(json);

});

app.post('/search', function(req, res) {
    console.log(req.body.id);
    res.end();
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});