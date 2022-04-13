var express = require('express');
var logger = require('morgan');
var mongoose = require('mongoose');

// connect to database

mongoose.connect("mongodb://localhost/sample", {useNewUrlParser: true, useUnifiedTopology: true}, (err) => {
    console.log(err ? err : "Connected to database");
});

var app = express();

app.use(logger('dev'));

app.get('/', (req, res) => {
    res.send("welcome");
})

app.listen(3000, () => {
    console.log('Server is listening on port 3k');
})