var express = require('express');
var path = require('path');

var app = express();

app.use(express.static(path.resolve(__dirname, 'public')));

app.get('/', function(req, res){
    //res.send('./public/admin/index.html');
})
module.exports = app;
