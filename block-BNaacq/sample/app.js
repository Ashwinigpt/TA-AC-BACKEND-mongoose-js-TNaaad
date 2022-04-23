var express = require('express');
var mongoose = require('mongoose');

// connect to mongoose

mongoose.connect("mongodb://localhost/sample", { useNewUrlParser: true, useUnifiedTopology: true},
    (err) => {
        console.log(err ? err : "Connected to database");
    }
);


var app = express();

// routes

app.get('/', (req, res) => {
    res.send('Welcome');
});

// server

app.listen(5000, (req, res) => {
    console.log('Server is listening on port 5k');
})
