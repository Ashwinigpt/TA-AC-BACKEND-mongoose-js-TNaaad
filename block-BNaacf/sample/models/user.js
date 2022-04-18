var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    village: String,
    city: String,
    state: String,
    pin: Number
})
