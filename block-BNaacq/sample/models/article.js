var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var articleSchema = new Schema ({
    title: {type: String, required: true},
    description: String,
    tags: String,
    likes: Number,
    author: String,
    comment: Number,
}, {timestamps: true}); 

module.exports = mongoose.model('Article', articleSchema);