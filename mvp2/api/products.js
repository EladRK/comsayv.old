/**
 * Created by elad.katz on 31/03/2016.
 */

"use strict";
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');


var Schema = mongoose.Schema;

var ProductSchema = new Schema({
    price: Number,
    category: String,
    name: String,
    type: String,
    columns: [Number]
});

var Product = mongoose.model('Product', ProductSchema);


/* GET users listing. */
router.get('/', function(req, res, next) {

    mongoose.connect('mongodb://localhost/comsayv');

    Product.find().then(products => {
      res.json(products);

    });
});

router.post('/', function(req, res, next) {

    var data = req.body;

    mongoose.connect('mongodb://localhost/comsayv');


    var product = new Product(data);
    product.save((result) =>
    {
        res.json(result);
    });


});


module.exports = router;







