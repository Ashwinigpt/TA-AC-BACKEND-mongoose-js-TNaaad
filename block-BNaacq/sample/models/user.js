var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema ({
    name: {type: String, required: true},
    email: {type: String, lowercase: true, match: /@/},
    age: {type: Number, min: 18, max: 30},
});

module.exports = mongoose.model('User', userSchema);