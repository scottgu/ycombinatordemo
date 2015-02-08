var express = require('express')
var app = express()
var port = process.env.PORT || 3000;

app.set('view engine', 'jade');

app.get('/', function (req, res) {
   res.render('index', { 
       title: 'Hey YCombinator', 
       message: 'Hello World'
   });
})

var server = app.listen(port, function () {

   var host = server.address().address
   var port = server.address().port

   console.log('Example app listening at http://%s:%s', host, port)
})
