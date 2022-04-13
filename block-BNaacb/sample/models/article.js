var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var articleSchema = new Schema({
    name: String,
    age: Number
})