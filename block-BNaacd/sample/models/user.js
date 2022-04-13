var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: String,
    email: String,
    age: Number
})

var userSchema = new Schema({
    email: { typeof: String, lowercase: true },
    age: { typeof: Number, default: 0 },
})