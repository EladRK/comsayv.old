var mongoose = require('mongoose');


var Schema = mongoose.Schema;

var CategorySchema = new Schema({
    name: String
});

var ProductSchema = new Schema({
    price: Number,
    category: String,
    name: String,
    type: String,
    columns: [Number]
});


var db = {}

db.Category = mongoose.model('Category', CategorySchema);
db.Product = mongoose.model('Product', ProductSchema);


mongoose.connect('mongodb://localhost/comsayv');

module.exports = db;

