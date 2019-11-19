var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: false
}));

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname+'/templates/landingPage.html'));
});

app.get('/login', (req, res)=>{
    res.sendFile(path.join(__dirname+'/templates/signup.html'));
});

app.post('/home', (req, res)=>{
    console.log(req.body);
    res.sendFile(path.join(__dirname+'/templates/dashboard.html'));
})

app.listen(3000, function(){
    console.log('server is running at 127.0.0.1:3000')
});