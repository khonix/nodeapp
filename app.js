var express = require('express');
var jade = require('jade');

//Init Express
var app = express();
console.log('Express Initialized');

//Set Views Folder
app.set('views',__dirname + '/views');

//Init Jade
app.set('view engine','jade');
console.log('Jade Initialized');

//Set static folder
app.use(express.static(path.join(__dirname, 'public')));

//Render Index
app.get('/',function(req,res){
	res.render('index',{
		title:'Welcome'
	});
});

app.listen(3000);
console.log('Sever running on localhost:3000');
