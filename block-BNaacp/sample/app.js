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

app.get('/users/:id', (req, res) => {
    var id = req.params.id;
    User.find({_id:('62399a8e5eca681ea1a2c5b3')}, (err, user) => {
        console.log(err);
        res.json(user);
    });
});

    // findOne

app.get('/users/:id', (req, res) => {
    User.findOne({_id:('62399a8e5eca681ea1a2c5b3')}, (err, user) => {
        var id = req.params.id;
        console.log(err);
        res.json(user);
    });
});

    // findById

app.get('/users/:id', (req, res) => {
    var id = req.params.id;
    User.findById({_id:('62399a8e5eca681ea1a2c5b3')}, (err, user) => {
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

app.put('/users/:id', (req, res, next) => {
    console.log(res.body);
    var id = req.params.id;
    User.findByIdAndUpdate(id, req.body, {new: true}, (err, updatedUser) => {
        console.log(err);
        res.json(updatedUser);
    });
});   

// delete route for deleting a user using id

app.delete("/users/:id", (req, res, next) => {
    User.findByIdAndDelete(req.params.id, (err, deleteduser) => {
      res.send(`${deleteduser.name} was deleted`);
    });
  });

// error handlers

app.use((req, res, next) => {
    res.send("Page not found");
});

// server

app.listen(3000, () => {
    console.log('Server is listening on port 3k');
});