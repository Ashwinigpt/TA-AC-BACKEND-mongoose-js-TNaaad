var express = require('express');
var mongoose = require('mongoose');

// connect to database

mongoose.connect("mongodb://localhost/sample", {useNewUrlParser: true, useUnifiedTopology: true}, (err) => {
    console.log(err ? err : "Connected to database");
});

var app = express();

app.listen(4000, () => {
    console.log('Server is listening on port 4k');
});