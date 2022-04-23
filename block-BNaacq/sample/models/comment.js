var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var commentSchema = new Schema ({
    content: String,
    author: String,
    article: String,
}, {timestamps: true});

module.exports = mongoose.model('Comment', commentSchema);