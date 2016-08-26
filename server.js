

var express = require('express');
var app = express();

app.use(express.static('angularjs'));

app.get('/', function(req, res){
    res.send('Hello everyone!');
})

var server = app.listen(8081, function () {

    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)

})