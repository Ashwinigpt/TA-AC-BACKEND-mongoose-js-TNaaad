var express = require('express');
var mongoose = require('mongoose');
var User = require('./models/user');

// connect to mongoose

mongoose.connect("mongodb://localhost/sample", { useNewUrlParser: true, useUnifiedTopology: true},
    (err) => {
        console.log(err ? err : "Connected to database");
    }
);

var app = express();

// middlewares

app.use(express.json());

// routes

app.get('/', (req, res) => {
    res.send('Welcome');
});

// create

app.post('/users', (req, res, next) => {
    User.create(req.body, (err, user) => {
        console.log(err);
        res.json(user);
    });
});

// find

app.get('/users', (req, res) => {
    User.find({}, (err, user) => {
        console.log(err);
        res.json(user);
    });
});

    // findOne

app.get('/users', (req, res) => {
    User.findOne({}, (err, user) => {
        console.log(err);
        res.json(user);
    });
});

    // findById

app.get('/users', (req, res) => {
    User.findById({}, (err, user) => {
        console.log(err);
        res.json(user);
    });
});    

// update

app.put('/users/:id', (req, res) => {
    console.log(res.body);
    var id = req.params.id;
    User.update(id, req.body, {new: true}, (err, updatedProduct) => {
        console.log(err);
        res.json(updatedProduct);
    });
});

    // updateOne

app.put('/users/:id', (req, res) => {
    console.log(res.body);
    var id = req.params.id;
    User.updateOne(id, req.body, {new: true}, (err, updatedProduct) => {
        console.log(err);
        res.json(updatedProduct);
    });
});

    // findByIdAndUpdate

app.put('/users/:id', (req, res) => {
    console.log(res.body);
    var id = req.params.id;
    User.findByIdAndUpdate(id, req.body, {new: true}, (err, updatedProduct) => {
        console.log(err);
        res.json(updatedProduct);
    });
});   

// delete route for deleting a user using id

app.delete("/users/:id", (req, res) => {
    var userId = "some id from database";
    User.findByIdAndDelete(id, (err, user) => {
      if (err) return next(err);
      res.send("user deleted");
    });
  });


app.listen(3000, () => {
    console.log('Server is listening on port 3k');
});