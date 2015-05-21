var express = require('express');
var app = express();

app.use(express.static(__dirname + '/dist'));
app.use(express.static(__dirname + '/html'));
app.use(express.static(__dirname + '/javascript'));
app.use(express.static(__dirname + '/libs'));
app.listen(8080);

console.log("Server started at 8080...");
