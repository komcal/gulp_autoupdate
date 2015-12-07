var express = require('express');
var app = express();
var path = require('path');

app.set('views',path.join(__dirname,'views'));
//app.set('view engine','jade');
app.use(express.static('public'));
function getHomePage(req,res){
	res.render('index.jade');
	//res.send('<h1>Hello World</h1>');
	//res.sendFile(__dirname + '/views/index.html');
}
app.get('/',getHomePage);

var server = app.listen(5555,function(){
	console.log("Express is running on port 5555");
});