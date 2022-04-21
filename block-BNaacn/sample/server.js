var express = require('express');
var mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/sample", {useNewUrlParser: true, useUnifiedTopology: true},
    (err) => {
        console.log(err ? err : "Connected to database");
    }
);

var app = express();

app.get('/', (req, res) => {
    res.send('Welcome');
})

app.listen(4000, () => {
    console.log('Server is listening on port 4k');
})