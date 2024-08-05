var express = require('express');

var app = express();

app.get('/', function (req,res){
    console.log("A POST request for the homepage is accessed.");
    res.send('Here is the POST Method');
})

app.get('/list_user', function (req,res) {
    console.log("Got a GET request for /list_user");
    res.send('This is a Page Listing');
})

app.get('/ab*cd', function (req,res) {
    console.log("Got a GET request for /ab*cd");
    res.send('Pattern Match Page');
})

app.get('/my_prof', function (req,res) {
    console.log("Got a GET request for /my_prof");
    res.send('Reyes John Benedict');
})

var server = app.listen(4001, function (){
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s",host, port)
})